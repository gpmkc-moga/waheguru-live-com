<template>
  <!-- Adapted for Nuxt from 
  official doc
  https://documentation.onesignal.com/docs/web-push-custom-code-examples#section-custom-link-prompt
 -->
  <div v-if="subscriptionState != null" class="flex flex-col items-center">
    <div class="mt-2 text-center text-sm md:text-base lg:text-2xl">
      Get daily Hukumnama alerts on Website
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

export default Vue.extend({
  data() {
    return {
      subscribeText: "Subscribe",
      unsubscribeText: "Unsubscribe",
      subscriptionState: null,
    };
  },
  computed: {
    buttonText() {
      return this.subscriptionState?.isPushEnabled
        ? this.unsubscribeText
        : this.subscribeText;
    },
  },
  mounted() {
    console.log("mounted");
    console.log("window.$OneSignal");
    console.dir(window.$OneSignal);
    window.$OneSignal.push(() => {
      console.log("window.$OneSignal.push");
      this.setupSubscriptionButton();
    });
  },
  methods: {
    setupSubscriptionButton() {
      console.log("setupSubscriptionButton");
      // If we're on an unsupported browser, do nothing
      if (!window.$OneSignal.isPushNotificationsSupported()) {
        console.log("!window.$OneSignal.isPushNotificationsSupported()");
        return;
      }
      this.getSubscriptionState();
      window.$OneSignal.on("subscriptionChange", (isSubscribed) => {
        /* If the user's subscription state changes during the page's session, update the button text */
        console.log("subscriptionChange");

        this.getSubscriptionState();
      });
    },
    onManageWebPushSubscriptionButtonClicked() {
      console.log("onManageWebPushSubscriptionButtonClicked");

      window.$OneSignal.push(() => {
        if (this.subscriptionState.isPushEnabled) {
          /* Subscribed, opt them out */
          console.log("window.$OneSignal.setSubscription(false)");

          window.$OneSignal.setSubscription(false);
        } else if (this.subscriptionState.isOptedOut) {
          /* Opted out, opt them back in */

          window.$OneSignal.setSubscription(true);
          console.log("window.$OneSignal.setSubscription(true)");
        } else {
          /* Unsubscribed, subscribe them */

          window.$OneSignal.registerForPushNotifications();
          console.log("window.$OneSignal.registerForPushNotifications()");
        }
      });
    },
    getSubscriptionState(): any {
      console.log("getSubscriptionState");
      return Promise.all([
        window.$OneSignal.isPushNotificationsEnabled(),
        window.$OneSignal.isOptedOut(),
      ]).then((result) => {
        console.log("getSubscriptionState> promise all then");
        const isPushEnabled = result[0];
        const isOptedOut = result[1];
        this.subscriptionState = {
          isPushEnabled,
          isOptedOut,
        };
        console.dir(this.subscriptionState);

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
