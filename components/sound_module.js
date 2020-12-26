import { SoundPreset } from "./models/SoundPreset.js"
import { Howl, Howler } from "howler"

export default {
  props: {
    sp_sound_enabled: { type: Boolean, default: false, },
    sp_sound_volume:  { type: Number,  default: 0.5,   },
  },
  methods: {
    sound_play(key, options = {}) {
      this.$emit("sound_play", key)

      if (this.sp_sound_enabled) {
        const e = SoundPreset.fetch(key)
        const params = {
          src: e.source,
          volume: e.volume * this.sp_sound_volume,
          autoplay: true,
          ...options,
        }
        // https://github.com/goldfire/howler.js#documentation
        return new Howl(params)
      }
    },
  },
}
