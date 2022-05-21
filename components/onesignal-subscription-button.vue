<template>
  <!-- Adapted for Nuxt from 
  official doc
  https://documentation.onesignal.com/docs/web-push-custom-code-examples#section-custom-link-prompt
 -->
  <div v-if="subscriptionState != null" class="flex flex-col items-center">
    <div class="mt-2 text-center text-sm md:text-base lg:text-2xl">
      {{ constants.subscribeMessage }}
    </div>
    <button
      class="subscription-button"
      :class="{ 'opacity-80': subscriptionState.isPushEnabled }"
      @click.prevent="onManageWebPushSubscriptionButtonClicked"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";

export default Vue.extend({
  data() {
    return {
      constants,
      subscriptionState: null,
    };
  },
  computed: {
    buttonText() {
      return this.subscriptionState?.isPushEnabled
        ? constants.unsubscribe
        : constants.subscribe;
    },
  },
  mounted() {
    //console.log("mounted");
    //console.log("OneSignal");
    //console.dir(OneSignal);
    OneSignal.push(() => {
      //console.log("OneSignal.push");
      this.setupSubscriptionButton();
    });
  },
  methods: {
    setupSubscriptionButton() {
      //console.log("setupSubscriptionButton");
      // If we're on an unsupported browser, do nothing
      if (!OneSignal.isPushNotificationsSupported()) {
        //console.log("!OneSignal.isPushNotificationsSupported()");
        return;
      }
      this.getSubscriptionState();
      OneSignal.on("subscriptionChange", (isSubscribed) => {
        /* If the user's subscription state changes during the page's session, update the button text */
        //console.log("subscriptionChange");

        this.getSubscriptionState();
      });
    },
    onManageWebPushSubscriptionButtonClicked() {
      //console.log("onManageWebPushSubscriptionButtonClicked");

      OneSignal.push(() => {
        if (this.subscriptionState.isPushEnabled) {
          /* Subscribed, opt them out */
          //console.log("OneSignal.setSubscription(false)");

          OneSignal.setSubscription(false);
        } else if (this.subscriptionState.isOptedOut) {
          /* Opted out, opt them back in */

          OneSignal.setSubscription(true);
          //console.log("OneSignal.setSubscription(true)");
        } else {
          /* Unsubscribed, subscribe them */

          OneSignal.registerForPushNotifications();
          //console.log("OneSignal.registerForPushNotifications()");
        }
      });
    },
    getSubscriptionState(): any {
      //console.log("getSubscriptionState");
      return Promise.all([
        OneSignal.isPushNotificationsEnabled(),
        OneSignal.isOptedOut(),
      ]).then((result) => {
        //console.log("getSubscriptionState> promise all then");
        const isPushEnabled = result[0];
        const isOptedOut = result[1];
        this.subscriptionState = {
          isPushEnabled,
          isOptedOut,
        };
        //console.dir(this.subscriptionState);

        return this.subscriptionState;
      });
    },
  },
});
</script>

<style scoped>
.subscription-button {
  @apply mt-1 md:mt-1.5 lg:mt-2
        p-1
        md:p-2
        text-sm
        md:text-base
        lg:text-2xl
        bg-site-blue
        rounded
        text-white;
}
</style>
