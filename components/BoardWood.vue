<template lang="pug">
.BoardWood(@click.capture="click_handle")
  // .BoardWood に設定した background-image に影をつけるために drop-shadow すると
  // .BoardWood その子供である table にまで影が適用されてしまう
  // table に影が適用されると、駒の影にも .BoardWood の影が加算されてしまい濃くなってしまう
  // それを防ぐためには .BoardWood の :after に背景を指定すればよい
  // が、わかりやすくするために背景専用の BoardWoodBG を追加した
  // これなら BoardWoodTexture に適用した影が table に影響しない
  .BoardWoodTexture.is-overlay

  // BoardWoodTexture の兄弟として BoardField を置くと BoardWoodTexture に BoardField の border が負ける
  .BoardFieldWithPadding.is-overlay
    table.BoardField
      tr(v-for="(_, y) in base.sp_board_dimension_h")
        td(
          v-for="(_, x) in base.sp_board_dimension_w"
          @pointerdown="base.board_cell_pointerdown_handle(logical_xy(x, y), $event)"
          @click.stop.prevent="base.board_cell_left_click(logical_xy(x, y), $event)"
          @click.stop.prevent.right="base.board_cell_right_click(logical_xy(x, y), $event)"
          @mouseover="base.board_mouseover_handle(logical_xy(x, y), $event)"
          @mouseleave="base.mouseleave_handle"
          )
          PieceTap(
            :base="base"
            :class="base.board_piece_tap_class(logical_xy(x, y))"
            :style="base.board_piece_back_style(logical_xy(x, y))"
            :piece_texture_class="base.mediator.board_piece_fore_class(logical_xy(x, y))"
            )
</template>

<script>
import { support } from "./support.js"
import { Board   } from "./models/board.js"

import PieceTap from "./PieceTap.vue"

export default {
  name: "BoardWood",
  mixins: [support],
  components: {
    PieceTap,
  },
  beforeUpdate() {
    this.base.$data._BoardWoodRenderCount += 1
  },
  methods: {
    click_handle() {
      if (this.base.sp_board_click_handle) {
        this.base.sp_board_click_handle()
      }
    },

    logical_xy(x, y) {
      x = x + Board.dimension - this.base.sp_board_dimension_w
      y = y + Board.dimension - this.base.sp_board_dimension_h
      if (this.base.fliped) {
        x = this.base.sp_board_dimension_w - x - 1
        y = this.base.sp_board_dimension_h - y - 1
      }
      return [x, y]
    },
  },
}
</script>

<style lang="sass">
@import "./support.sass"

// 外枠 border をどこに適用するか？
// |-------------------+--------------------------+------------------------------------+------------------------------------+------|
// | 場所              | よい                     | だめ                               | 備考                               | 結果 |
// |-------------------+--------------------------+------------------------------------+------------------------------------+------|
// | BoardWood         | わかりやすい             | Chromeで隙間ができる               | わかりやすい気がしていただけ       |      |
// | BoardWoodTexture  | 角を丸めても縁取りできる | 影の影響がある                     | 画像に縁取りできても別に嬉しくない |      |
// | table.BoardField  | 普通に考えてここ         | グリッドと外枠に隙間が入れられない | 隙間を入れれても嬉しくない         | ←   |
// |-------------------+--------------------------+------------------------------------+------------------------------------+------|

.ShogiPlayerGround
  // 全体背景と同じ構成
  +defvar(sp_board_color, rgba(0, 0, 0, 0.2))      // 盤の色
  +defvar(sp_board_image, none)                    // 盤画像
  +defvar(sp_board_blur, 0)                        // 盤ぼかし
  +defvar(sp_board_grayscale, 0%)                  // 盤グレースケール
  +defvar(sp_board_contrast, 1.0)                  // 盤コントラスト
  +defvar(sp_board_invert, 0)                      // 盤色反転
  +defvar(sp_board_hue, 1.0)                       // 盤色相
  +defvar(sp_board_saturate, 1.0)                  // 盤彩度
  +defvar(sp_board_brightness, 1.0)                // 盤輝度
  +defvar(sp_board_sepia, 0)                       // 盤セピア
  +defvar(sp_board_blend, normal)                  // 盤の mix-blend-mode の値

  +defvar(sp_board_opacity, 1.0)                   // 非半透明度
  +defvar(sp_board_padding, 1.5)                   // 盤の隅の隙間
  +defvar(sp_board_radius, 5)                      // 盤の隅の丸め度合い

  +defvar(sp_grid_outer_stroke, 0)                 // グリッドの外枠の太さ(紙面風のとき)
  +defvar(sp_grid_outer_color, rgba(0, 0, 0, 0.5)) // グリッド外枠色
  +defvar(sp_grid_color, rgba(0, 0, 0, 0.5))       // グリッド色
  +defvar(sp_grid_stroke, 1)                       // グリッド太さ
  +defvar(sp_grid_outer_texture_edge_stroke, 0)    // 盤背景の縁取りの太さ(影の影響あり)
  +defvar(sp_grid_star_size, 10%)                  // 星の大きさ

  +defvar(sp_board_dimension_w, 9)                 // 盤のセル数(w) CSS内では未使用
  +defvar(sp_board_dimension_h, 9)                 // 盤のセル数(h) TDの縦幅を決めるのに必要

  .BoardWood
    width: 100%
    height: 100%
    +is_overlay_origin

  .BoardWoodTexture
    mix-blend-mode: var(--sp_board_blend)

    background-color: var(--sp_board_color)  // 背景色は画像の透明な部分があれば見えるので画像があっても無駄にはならない
    +is_background_cover_by_image
    background-image: var(--sp_board_image)  // none でスルーする
    // background-image: url("../assets/inspect/256x256.png")

    border-radius: calc(var(--sp_board_radius) * 1px)
    border: calc(var(--sp_grid_outer_texture_edge_stroke) * 1px) solid var(--sp_grid_outer_color) // 画像の輪郭で影の影響あり

  &.is_board_shadow_box
    .BoardWoodTexture
      +filter_box_shadow(1, board_filter_params_without_drop_shadow())
  &.is_board_shadow_drop
    .BoardWoodTexture
      +filter_drop_shadow(1, board_filter_params_without_drop_shadow())
  &.is_board_shadow_none
    .BoardWoodTexture
      filter: board_filter_params_without_drop_shadow()

  .BoardFieldWithPadding
    padding: calc(var(--sp_board_padding) * 1%)

  .BoardField
    // これを指定するとオーバーレイの兄(BoardWoodTexture)の上に表示できる
    // が、駒のテクスチャに mix-blend-mode が効かなくなる
    // ので指定してはいけない
    // isolation: isolate

    width: 100%
    height: 100%
    border: calc(var(--sp_grid_outer_stroke) * 1px) solid var(--sp_grid_outer_color)
    border-collapse: collapse // td同士のborderを共有する

    // 盤面の駒(テキスト)を連打やドラッグの際に選択できないようにする
    @extend %is_unselectable

    table-layout: fixed    // 横幅均等

  td
    // 何もしなければ縦幅は均等になる
    border: calc(var(--sp_grid_stroke) * 1px) solid var(--sp_grid_color) // border-collapse: collapse の効果で重ならない

    // 縦幅はブラウザによって異なるので難しい
    // Google Chrome 90.0.4430.216 までは指定なしで均等だったが、
    // Google Chrome 91.0.4472.77  からは最初と最後の行だけ1.2倍ほど広がり均等でなくなった
    // Firefox ではまったく均等にしないためセルが表示されない
    // そのため明示的に指定するようにした。これによって対象外としていた Firefox でも見れるようになった
    height: calc(100.0% / var(--sp_board_dimension_h))

  // border が BoardWoodTexture に負けるので入れ子にしている
  // td
  //   +is_overlay_origin
  //   .CellBorder
  //     +is_overlay_block
  //     // border: calc(var(--sp_grid_stroke) * 1px) solid var(--sp_grid_color)

  tr:nth-child(3n+4)
    td:nth-child(3n+4)
      position: relative
      &:after
        position: absolute
        content: ""
        top:  calc(var(--sp_grid_star_size) * -0.5)
        left: calc(var(--sp_grid_star_size) * -0.5)
        width:  var(--sp_grid_star_size)
        height: var(--sp_grid_star_size)
        border-radius: 50%
        background-color: var(--sp_grid_outer_color)
</style>
