<template lang="pug">
.MembershipLocationPlayerInfo(v-if="show_p" :class="component_class" @click="click_handle")
  .MembershipLocationPlayerInfoName(v-html="player_name" v-if="player_name")
  .MembershipLocationPlayerInfoTime.is-family-monospace(v-html="player_time" v-if="player_time")
</template>

<script>
import { support } from "./support.js"

export default {
  name: "MembershipLocationPlayerInfo",
  mixins: [support],
  props: {
    location: { required: true },
  },
  methods: {
    player_attr_of(key) {
      if (this.one_side_info) {
        return this.one_side_info[key]
      }
    },
    click_handle() {
      if (this.base.sp_player_click_handle) {
        this.base.sp_player_click_handle(this.location, this.one_side_info)
        // this.$emit("player_info_click", this.location, this.one_side_info)
      }
    },
  },
  computed: {
    show_p() {
      return this.player_name || this.player_time
    },
    component_class() {
      return [
        { "is-clickable": this.base.sp_player_click_handle },
        this.player_class,
      ]
    },
    one_side_info() {
      if (this.base.sp_player_info) {
        return this.base.sp_player_info[this.location.key]
      }
    },
    player_name()  { return this.player_attr_of("name")  },
    player_time()  { return this.player_attr_of("time")  },
    player_class() { return this.player_attr_of("class") },
  },
}
</script>

<style lang="sass">
@import "./support.sass"
.ShogiPlayerGround
  .MembershipLocationPlayerInfo
    font-size: $size-7
    word-break: break-all
    font-weight: bold
    flex-shrink: 0 // 縮小しない(縦置き時に駒台の横幅を100%にするとここが縮小しようとして1文字ずつ折り返しになる、のを防ぐ)

  .MembershipLocationPlayerInfoTime
    white-space: nowrap

  &.is_balloon_on
    .MembershipLocationPlayerInfo
      @extend %is_piece_count_color_set
      padding: 0.5em
      border-radius: 3px

  &.is_layer_on
    .MembershipLocationPlayerInfo
      +is_layer_border

  .MembershipLocationPlayerInfo
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

  .is_position_north
    .MembershipLocationPlayerInfo
      @extend %is_flip

  .is_position_south
    .MembershipLocationPlayerInfo

  // 横配置のときに限り、横幅を「駒台の駒の押せる領域」と同じ幅にする
  +IS_HORIZONTAL
    .MembershipLocationPlayerInfo
      max-width: var(--sp_stand_piece_w)
      line-height: 100%

  // 縦幅がわりと自由につかえるので隙間をあける
  +IS_VERTICAL
    .MembershipLocationPlayerInfo
      max-width: unset
      line-height: 140%
</style>
