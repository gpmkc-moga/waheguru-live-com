import constants from "./constants";

export enum PlayerState {
  init,
  loading,
  loaded,
  playing,
  errored,
  paused,
  stopped,
  ended,
}

export const AudioPlayerMixin = {
  data() {
    return {
      _sound: null,
      _playerState: PlayerState.init,
    };
  },
  destroyed() {
    this.disposePlayer();
  },
  methods: {
    setupSound(url, autoplay = false) {
      this.$data._playerState = PlayerState.init;
      if (this.$data._sound === null) {
        this.$data._sound = new Audio(url);
      } else {
        this.$data._sound.setAttribute("src", url);
      }
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement#events
      this.$data._sound?.addEventListener("abort", this._updateStateEvent);
      this.$data._sound?.addEventListener("emptied", this._updateStateEvent);
      this.$data._sound?.addEventListener("ended", this._updateStateEvent);
      this.$data._sound?.addEventListener("error", this._updateStateEvent);
      this.$data._sound?.addEventListener("loadeddata", this._updateStateEvent);
      this.$data._sound?.addEventListener("loadstart", this._updateStateEvent);
      this.$data._sound?.addEventListener("pause", this._updateStateEvent);
      this.$data._sound?.addEventListener("playing", this._updateStateEvent);
      this.$data._sound?.addEventListener("stalled", this._updateStateEvent);

      if (autoplay) {
        this._playSound();
      }
    },
    disposePlayer() {
      this.handlePause();
      this.$data._sound?.removeEventListener("abort", this._updateStateEvent);
      this.$data._sound?.removeEventListener("emptied", this._updateStateEvent);
      this.$data._sound?.removeEventListener("ended", this._updateStateEvent);
      this.$data._sound?.removeEventListener("error", this._updateStateEvent);
      this.$data._sound?.removeEventListener(
        "loadeddata",
        this._updateStateEvent
      );
      this.$data._sound?.removeEventListener(
        "loadstart",
        this._updateStateEvent
      );
      this.$data._sound?.removeEventListener("pause", this._updateStateEvent);
      this.$data._sound?.removeEventListener("playing", this._updateStateEvent);
      this.$data._sound?.removeEventListener("stalled", this._updateStateEvent);
      this.$data._sound?.setAttribute(
        "src",
        "/audio-gallery/assets_waheguru-simran-loop.mp3"
      ); // small source to reset downloading
      this.$data._sound?.load();
      this.$data._playerState = PlayerState.init;
    },
    handlePlay() {
      if (!this.isDisabledPlay) {
        this._playSound();
      }
    },
    handlePause() {
      if (!this.isDisabledPause) {
        this._pauseSound();
      }
    },
    handlePlayPause() {
      if (!this.isDisabledPause) {
        this._pauseSound();
      } else if (!this.isDisabledPlay) {
        this._playSound();
      }
    },
    handleStop() {
      if (!this.isDisabledStop) {
        this._stopSound();
      }
    },
    // internal methods
    _playSound() {
      this.$data._sound?.play();
    },
    _pauseSound() {
      this.$data._sound?.pause();
    },
    _stopSound() {
      this._pauseSound();
      this.$data._sound?.load();
      // this.$data._sound?.currentTime = 0;
    },
    _updateStateEvent(event) {
      this._updateState(event.type);
    },
    _updateState(eventString: string) {
      switch (eventString) {
        case "abort":
          this.$data._playerState = PlayerState.errored;
          break;
        case "emptied":
          this.$data._playerState = PlayerState.stopped;
          break;
        case "ended":
          this.$data._playerState = PlayerState.ended;
          break;
        case "error":
          this.$data._playerState = PlayerState.errored;
          break;
        case "loadeddata":
          this.$data._playerState = PlayerState.loaded;
          break;
        case "loadstart":
          this.$data._playerState = PlayerState.loading;
          break;
        case "pause":
          this.$data._playerState = PlayerState.paused;
          break;
        case "playing":
          this.$data._playerState = PlayerState.playing;
          break;
        case "stalled":
          this.$data._playerState = PlayerState.errored;
          break;
      }
    },
  },
  computed: {
    loading() {
      return this.$data._playerState === PlayerState.loading;
    },
    playing() {
      return this.$data._playerState === PlayerState.playing;
    },
    init() {
      return this.$data._playerState === PlayerState.init;
    },
    errored() {
      return this.$data._playerState === PlayerState.errored;
    },
    isDisabledPlay() {
      return (
        this.isDisabledPlayPause ||
        this.$data._playerState === PlayerState.playing
      );
    },
    isDisabledPause() {
      return !(this.$data._playerState === PlayerState.playing);
    },
    isDisabledPlayPause() {
      return (
        this.$data._playerState === PlayerState.errored ||
        this.$data._playerState === PlayerState.loading ||
        this.$data._playerState === PlayerState.init
      );
    },
    isDisabledStop() {
      return !(
        this.$data._playerState === PlayerState.playing ||
        this.$data._playerState === PlayerState.paused
      );
    },
    playerStateText() {
      // https://www.w3schools.com/js/js_switch.asp
      switch (this.$data._playerState) {
        case PlayerState.init:
          return constants.init;
        case PlayerState.loading:
          return constants.loading;
        case PlayerState.loaded:
          return constants.loaded;
        case PlayerState.playing:
          return constants.playing;
        case PlayerState.errored:
          return constants.errored;
        case PlayerState.paused:
          return constants.paused;
        case PlayerState.stopped:
          return constants.stopped;
        case PlayerState.ended:
          return constants.ended;
        default:
          return "";
      }
    },
  },
};

// https://stackoverflow.com/a/62332147
