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
    if (Array.isArray(this.$OneSignal)) {
      this.$OneSignal.push(() => {
        this.setupSubscriptionButton();
      });
    } else {
      this.setupSubscriptionButton();
    }
  },
  methods: {
    setupSubscriptionButton() {
      // If we're on an unsupported browser, do nothing
      if (!this.$OneSignal.isPushNotificationsSupported()) {
        return;
      }
      this.getSubscriptionState();
      this.$OneSignal.on("subscriptionChange", (isSubscribed) => {
        /* If the user's subscription state changes during the page's session, update the button text */

        this.getSubscriptionState();
      });
    },
    onManageWebPushSubscriptionButtonClicked() {
      if (this.subscriptionState.isPushEnabled) {
        /* Subscribed, opt them out */

        this.$OneSignal.setSubscription(false);
      } else if (this.subscriptionState.isOptedOut) {
        /* Opted out, opt them back in */

        this.$OneSignal.setSubscription(true);
      } else {
        /* Unsubscribed, subscribe them */

        this.$OneSignal.registerForPushNotifications();
      }
    },
    getSubscriptionState(): any {
      return Promise.all([
        this.$OneSignal.isPushNotificationsEnabled(),
        this.$OneSignal.isOptedOut(),
      ]).then((result) => {
        const isPushEnabled = result[0];
        const isOptedOut = result[1];
        this.subscriptionState = {
          isPushEnabled,
          isOptedOut,
        };

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
        bg-[#2c68a7]
        rounded
        text-white;
}
</style>
