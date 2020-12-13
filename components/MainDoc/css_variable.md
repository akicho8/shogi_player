| 変数                                  | 初期値                    | 意味                                         |
|---------------------------------------|---------------------------|----------------------------------------------|
| `--sp_board_piece_rate`               | 90%                       | 盤のセル内の駒占有率                         |
| `--sp_board_piece_position`           | center                    | 駒を選択できる範囲内の駒の縦位置             |
| `--sp_stand_piece_w`                  | 47px                      | 駒台のセル(W)                                |
| `--sp_stand_piece_h`                  | 50px                      | 駒台のセル(H)                                |
| `--sp_stand_piece_rate`               | 80%                       | 駒台のセル内の駒占有率                       |
| `--sp_piece_box_piece_w`              | 38px                      | 駒箱のセル(W)                                |
| `--sp_piece_box_piece_h`              | 46px                      | 駒箱のセル(H)                                |
| `--sp_piece_box_piece_rate`           | 90%                       | 駒箱のセル内の駒占有率                       |
| `--sp_stand_piece_w_mobile`           | 38px                      | 駒台のセル(W) ※モバイル時                   |
| `--sp_stand_piece_h_mobile`           | 46px                      | 駒台のセル(H) ※モバイル時                   |
| `--sp_stand_piece_rate_mobile`        | 90%                       | 駒台のセル内の駒占有率 ※モバイル時          |
| `--sp_piece_box_piece_w_mobile`       | 38px                      | 駒箱のセル(W) ※モバイル時                   |
| `--sp_piece_box_piece_h_mobile`       | 46px                      | 駒箱のセル(H) ※モバイル時                   |
| `--sp_piece_box_piece_rate_mobile`    | 90%                       | 駒箱のセル内の駒占有率 ※モバイル時          |
| `--sp_grid_color`                     | rgba(0, 0, 0, 0.5)        | グリッド色                                   |
| `--sp_grid_stroke`                    |                         1 | グリッド太さ                                 |
| `--sp_board_padding`                  |                       1.5 | 盤の隅の隙間                                 |
| `--sp_grid_outer_stroke`              |                         0 | グリッドの外枠の太さ(紙面風のとき)           |
| `--sp_grid_outer_texture_edge_stroke` |                         0 | 盤背景の縁取りの太さ(影の影響あり)           |
| `--sp_grid_star`                      | 6px                       | 星の大きさ                                   |
| `--sp_board_radius`                   | 5px                       | 盤の隅の丸め度合い                           |
| `--sp_board_color`                    | rgba(0, 0, 0, 0.2)        | 盤の色                                       |
| `--sp_board_opacity`                  |                       1.0 | 非半透明度                                   |
| `--sp_board_grayscale`                | 0%                        | グレースケール                               |
| `--sp_board_brightness`               |                       1.0 | 輝度                                         |
| `--sp_board_blur`                     |                         0 | ぼかし                                       |
| `--sp_board_image`                    | none                      | 背景画像                                     |
| `--sp_body_width`                     | 100%                      | 盤(駒台を含む)の幅                           |
| `--sp_piece_count_gap_right`          | 86%                       | 駒数の駒右端からのオフセット(横配置時)       |
| `--sp_piece_count_gap_bottom`         | 47%                       | 駒数の駒底辺からのオフセット(縦配置時)       |
| `--sp_piece_count_font_size`          | 0.75rem                   | 駒数の文字サイズ                             |
| `--sp_piece_count_font_color`         |  rgba(0, 0, 0, 0.75)      | 駒数の文字色                                 |
| `--sp_piece_count_bg_color`           | rgba(255, 255, 255, 0.75) | 駒数の文字色背景                             |
| `--sp_piece_count_padding`            | 3px                       | 駒数のパディング                             |
| `--sp_edit_tool_box_margin_bottom`    | 0.5rem                    | edit_mode時の上のボタンの下のマージン        |
| `--sp_ground_color`                   | transparent               | グラウンド背景色                             |
| `--sp_ground_image`                   | none                      | グラウンド背景画像                           |
| `--sp_ground_grayscale`               |                         0 | グレースケール                               |
| `--sp_ground_brightness`              |                       1.0 | 輝度                                         |
| `--sp_ground_blur`                    |                         0 | ぼかし                                       |
| `--sp_location_mark_inactive_rate`    |                       0.5 | 手番ではないときの☗サイズの倍率             |
| `--sp_piece_box_color`                | rgba(0, 0, 0, 0.2)        | 駒箱背景                                     |
| `--sp_piece_box_margin_top`           | 10px                      | 横レイアウト時の上マージン                   |
| `--sp_stand_hover_border_color`       | rgba(0, 0, 0, 0.2)        | 駒を持って駒箱の上にいるときのボーダー色     |
| `--sp_stand_hover_border_stroke`      | 2px                       | 駒を持って駒箱の上にいるときのボーダーの太さ |
| `--sp_board_aspect_ratio`             | 109.7%                    | 盤の横を100としたときの縦の比率              |
| `--sp_shadow_offset`                  |                         2 | 影の右下方法への長さ                         |
| `--sp_shadow_blur`                    |                         3 | 影の範囲                                     |
| `--sp_shadow_color`                   | rgba(0, 0, 0, 0.4)        | 影の色                                       |
| `--sp_dimension`                      |                         9 | 盤の縦辺のセル数                             |