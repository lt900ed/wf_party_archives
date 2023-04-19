const exist_chars = [
  {
    'unit_id': 'fire_dragon',
    'name_jp': 'ヴァーグナー',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/fire_dragon/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'pirates_girl',
    'name_jp': 'マリーナ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/pirates_girl/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'clarisse',
    'name_jp': 'クラリス',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/clarisse/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'battle_maid_xm19',
    'name_jp': 'マリアンネ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/battle_maid_xm19/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'compliment_oiran',
    'name_jp': 'キクノ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/compliment_oiran/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'heavenly_one',
    'name_jp': 'ノエネ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/heavenly_one/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'black_wolf_knight',
    'name_jp': 'ロルフ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/black_wolf_knight/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'tiger_treasure_hunter_smr20',
    'name_jp': 'ミア',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/tiger_treasure_hunter_smr20/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'kunoichi_1anv',
    'name_jp': 'ハナビ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/kunoichi_1anv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'lady_summoner_xm20',
    'name_jp': 'ビアンカ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/lady_summoner_xm20/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'halberd_princess',
    'name_jp': 'トーリア',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/halberd_princess/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'doctor_pirate',
    'name_jp': 'リャオ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/doctor_pirate/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'onmyoji_boy_wt21',
    'name_jp': 'スイゼン',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/onmyoji_boy_wt21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'magical_bayonetter',
    'name_jp': 'クアレ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/magical_bayonetter/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'zeta',
    'name_jp': 'ゼタ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/zeta/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'tsundere_bountyhunter',
    'name_jp': 'レティシア',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/tsundere_bountyhunter/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'bodysuit_trooper_smr21',
    'name_jp': 'エクリール',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/bodysuit_trooper_smr21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'suzumiya_haruhi',
    'name_jp': '涼宮ハルヒ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/suzumiya_haruhi/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'shadow_redhood',
    'name_jp': 'リュノン',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/shadow_redhood/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'pirates_girl_2anv',
    'name_jp': 'マリーナ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/pirates_girl_2anv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'misogi',
    'name_jp': 'ミソギ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/misogi/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'tsundere_bountyhunter_vt22',
    'name_jp': 'レティシア',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/tsundere_bountyhunter_vt22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'anger_investigator',
    'name_jp': 'ウェイフー',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/anger_investigator/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'halberd_princess_2halfanv',
    'name_jp': 'トーリア',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/halberd_princess_2halfanv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'gold_ship',
    'name_jp': 'ゴールドシップ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/gold_ship/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'megumin',
    'name_jp': 'めぐみん',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/megumin/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'monster_cook_smr22',
    'name_jp': 'パルフェ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/monster_cook_smr22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'lion_swordman_playable',
    'name_jp': 'マグノス',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/lion_swordman_playable/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'golemclub_captain',
    'name_jp': 'デイダリア',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/golemclub_captain/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'tiger_treasure_hunter_xm22',
    'name_jp': 'ミア',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/tiger_treasure_hunter_xm22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'still_obstinator_ballot23',
    'name_jp': 'スティネル',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/still_obstinator_ballot23/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'flame_blessgirl',
    'name_jp': 'ルネッタ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/flame_blessgirl/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'brown_fighter',
    'name_jp': 'ソーニャ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/brown_fighter/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'onmyoji_boy',
    'name_jp': 'スイゼン',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/onmyoji_boy/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'lightbullet_wiz_ny20',
    'name_jp': 'エリヤ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/lightbullet_wiz_ny20/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'ice_witch',
    'name_jp': 'サイファ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/ice_witch/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'commander',
    'name_jp': 'シレーヌ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/commander/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'lakeside_guardian',
    'name_jp': 'リムニス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/lakeside_guardian/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'drawing_witch',
    'name_jp': 'ラキーシャ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/drawing_witch/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'prince_zero_smr20',
    'name_jp': 'ラーゼルト',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/prince_zero_smr20/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'minamoto_sakura',
    'name_jp': '源さくら',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/minamoto_sakura/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'freeze_eye',
    'name_jp': 'レイラス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/freeze_eye/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'emilia',
    'name_jp': 'エミリア',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/emilia/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'rem',
    'name_jp': 'レム',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/rem/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'waterdragon_kunfu',
    'name_jp': 'シェイロン',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/waterdragon_kunfu/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'desert_commander',
    'name_jp': 'ハーリダル',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/desert_commander/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'mermaid_1halfanv',
    'name_jp': 'アメリア',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/mermaid_1halfanv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'holy_mother',
    'name_jp': 'マムナリア',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/holy_mother/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'nagato_yuki',
    'name_jp': '長門有希',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/nagato_yuki/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'waterdragon_kunfu_proud',
    'name_jp': 'シェイロン',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/waterdragon_kunfu_proud/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'psychic_yuki',
    'name_jp': '見嶋ユキ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/psychic_yuki/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'navy_officer',
    'name_jp': 'フラクシス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/navy_officer/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'ice_witch_2anv',
    'name_jp': 'サイファ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/ice_witch_2anv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'freeze_eye_xm21',
    'name_jp': 'レイラス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/freeze_eye_xm21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'heavenly_three',
    'name_jp': 'トラエッティ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/heavenly_three/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'kyouka',
    'name_jp': 'キョウカ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/kyouka/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'ice_dragon',
    'name_jp': 'アンバッハ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/ice_dragon/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'justice_lady',
    'name_jp': 'ジャスティ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/justice_lady/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'sing_android_2halfanv',
    'name_jp': 'ディア',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/sing_android_2halfanv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'aqua',
    'name_jp': 'アクア',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/aqua/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'luca_playable',
    'name_jp': 'ルカ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/luca_playable/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'pirates_of_fear',
    'name_jp': 'ゼリミール',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/pirates_of_fear/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'noelle_silva',
    'name_jp': 'ノエルシルヴァ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/noelle_silva/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'wind_spbro_3anv',
    'name_jp': 'シエル',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/wind_spbro_3anv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'psychic_yuki_ny23',
    'name_jp': 'ミシマユキ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/psychic_yuki_ny23/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'ruin_lady_meteor23',
    'name_jp': 'ソティエス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/ruin_lady_meteor23/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'fox_oracle',
    'name_jp': 'イナホ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/fox_oracle/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'cagliostro',
    'name_jp': 'カリオストロ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/cagliostro/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'samurai_xm19',
    'name_jp': 'ソウシロウ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/samurai_xm19/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'thunder_archer',
    'name_jp': 'メーティス',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/thunder_archer/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'mighty_striker',
    'name_jp': 'バラク',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/mighty_striker/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'machine_police_girl',
    'name_jp': 'セラ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/machine_police_girl/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'big_gunner',
    'name_jp': 'ボタン',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/big_gunner/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'illusionist_smr20',
    'name_jp': 'イルミ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/illusionist_smr20/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'dimension_witch_smr20',
    'name_jp': 'ベルセティア',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/dimension_witch_smr20/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'rec_android_1anv',
    'name_jp': 'レジス',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/rec_android_1anv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'heavenly_two',
    'name_jp': 'ビューシー',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/heavenly_two/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'girl_and_mecha',
    'name_jp': 'ロデ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/girl_and_mecha/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'general_toyakiren',
    'name_jp': 'ツインク',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/general_toyakiren/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'samurai_robot',
    'name_jp': 'ザンテツ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/samurai_robot/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'elder_guild_fighter',
    'name_jp': 'マーキス',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/elder_guild_fighter/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'machine_police_girl_smr21',
    'name_jp': 'セラ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/machine_police_girl_smr21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'horn_leader',
    'name_jp': 'メムラム',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/horn_leader/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'cyber_battergirl',
    'name_jp': 'ストライナ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/cyber_battergirl/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'dog_slasher_proud',
    'name_jp': 'ヘルガ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/dog_slasher_proud/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'psychic_tohru',
    'name_jp': '千岳トオル',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/psychic_tohru/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'white_tiger_2anv',
    'name_jp': 'シロ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/white_tiger_2anv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'super_robot',
    'name_jp': 'テクト',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/super_robot/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'spider_ninja',
    'name_jp': 'マユヅキ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/spider_ninja/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'combat_soldier_smr22',
    'name_jp': 'バレッタ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/combat_soldier_smr22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'nihilist_mechgirl',
    'name_jp': 'ラピュティナ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/nihilist_mechgirl/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'little_vampire',
    'name_jp': 'ルミラーカ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/little_vampire/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'palpebra_knight_lady_hw22',
    'name_jp': 'キーラ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/palpebra_knight_lady_hw22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'general_toyakiren_ny23',
    'name_jp': 'ツインク',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/general_toyakiren_ny23/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'octcyborg_lady',
    'name_jp': 'カシヴァルス',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/octcyborg_lady/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'dark_psygirl_vt23',
    'name_jp': 'ディーネ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/dark_psygirl_vt23/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'blade_dancer_wt23',
    'name_jp': 'リーブラム',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/blade_dancer_wt23/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'pbc_ceo_playable',
    'name_jp': 'キングジョンソン',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/pbc_ceo_playable/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'wind_spgirl',
    'name_jp': 'シルティー',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/wind_spgirl/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'wind_oracle',
    'name_jp': 'フィリア',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/wind_oracle/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'katana_ghost',
    'name_jp': 'ムラクモ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/katana_ghost/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'mercenary',
    'name_jp': 'レオン',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/mercenary/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'bigwing_shaman',
    'name_jp': 'シウエ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/bigwing_shaman/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'gentle_barten',
    'name_jp': 'ミゲル',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/gentle_barten/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'kokkoro',
    'name_jp': 'コッコロ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/kokkoro/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'wind_dragon',
    'name_jp': 'シュルト',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/wind_dragon/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'nikaido_saki',
    'name_jp': '二階堂サキ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/nikaido_saki/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'elf_princess',
    'name_jp': 'エステルリエル',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/elf_princess/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'wind_spgirl_1anv',
    'name_jp': 'シルティー',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/wind_spgirl_1anv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'timid_kunoichi_ny21',
    'name_jp': 'スズカ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/timid_kunoichi_ny21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'combat_animal',
    'name_jp': 'フラフィ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/combat_animal/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'brown_fighter_dst21',
    'name_jp': 'ソーニャ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/brown_fighter_dst21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'beast_shaman',
    'name_jp': 'ネヴィア',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/beast_shaman/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'elf_princess_1halfanv',
    'name_jp': 'エステルリエル',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/elf_princess_1halfanv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'bigwing_shaman_smr21',
    'name_jp': 'シウエ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/bigwing_shaman_smr21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'tengu_master',
    'name_jp': 'ゴウラン',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/tengu_master/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'mercenary_smr21',
    'name_jp': 'レオン',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/mercenary_smr21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'combat_animal_xm21',
    'name_jp': 'フラフィ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/combat_animal_xm21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'mimi',
    'name_jp': 'ミミ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/mimi/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'marching_conductor',
    'name_jp': 'マルチア',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/marching_conductor/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'wind_dragon_wt22',
    'name_jp': 'シュルト',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/wind_dragon_wt22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'waste_armor',
    'name_jp': 'エルマール',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/waste_armor/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'silence_suzuka',
    'name_jp': 'サイレンススズカ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/silence_suzuka/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'psychic_shouta_smr22',
    'name_jp': '伊野里ショウタ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/psychic_shouta_smr22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'ghost_nymph',
    'name_jp': 'マノカ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/ghost_nymph/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'yuno',
    'name_jp': 'ユノ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/yuno/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'asymmetry_birdgirl',
    'name_jp': 'ゼフィール',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/asymmetry_birdgirl/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'heavenly_four',
    'name_jp': 'シルクハーレ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/heavenly_four/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'heavenly_two_vt23',
    'name_jp': 'ビューシィ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/heavenly_two_vt23/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'psychic_gal',
    'name_jp': 'アサトヤエ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/psychic_gal/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'black_wolf_knight_wt23',
    'name_jp': 'ロルフ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/black_wolf_knight_wt23/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'wind_oracle_meteor23',
    'name_jp': 'フィリア',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/wind_oracle_meteor23/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'ruin_girl',
    'name_jp': 'ネフティム',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/ruin_girl/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'prince_zero',
    'name_jp': 'ラーゼルト',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/prince_zero/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'bodysuit_trooper',
    'name_jp': 'エクリール',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/bodysuit_trooper/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'fox_oracle_xm19',
    'name_jp': 'イナホ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/fox_oracle_xm19/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'starbreak_hunter',
    'name_jp': 'タージェス',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/starbreak_hunter/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'combat_soldier',
    'name_jp': 'バレッタ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/combat_soldier/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'blade_dancer',
    'name_jp': 'リーブラム',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/blade_dancer/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'ruin_girl_halfanv',
    'name_jp': 'ネフティム',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/ruin_girl_halfanv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'pecorine',
    'name_jp': 'ペコリーヌ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/pecorine/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'neoviolin_musician',
    'name_jp': 'リーラ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/neoviolin_musician/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'high_priestess',
    'name_jp': 'オルヴェール',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/high_priestess/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'lamp_guide',
    'name_jp': 'フィラメリア',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/lamp_guide/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'hoshikawa_ririi',
    'name_jp': '星川リリィ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/hoshikawa_ririi/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'wind_oracle_1anv',
    'name_jp': 'フィリア',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/wind_oracle_1anv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'lightbullet_wiz_vt21',
    'name_jp': 'エリヤ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/lightbullet_wiz_vt21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'crystal_swordman',
    'name_jp': 'セリオル',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/crystal_swordman/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'yokai_exterminator',
    'name_jp': 'レンゲツ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/yokai_exterminator/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'resistance_princess_smr21',
    'name_jp': 'リリス',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/resistance_princess_smr21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'fox_oracle_smr21',
    'name_jp': 'イナホ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/fox_oracle_smr21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'asahina_mikuru',
    'name_jp': '朝比奈みくる',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/asahina_mikuru/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'ruin_girl_smr21',
    'name_jp': 'ネフティム',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/ruin_girl_smr21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'guildknight_leader',
    'name_jp': 'ゼッヘル',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/guildknight_leader/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'neoviolin_musician_hw21',
    'name_jp': 'リーラ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/neoviolin_musician_hw21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'high_priestess_ny22',
    'name_jp': 'オルヴェール',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/high_priestess_ny22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'hero_girl_vt22',
    'name_jp': 'ネイト',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/hero_girl_vt22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'still_obstinator',
    'name_jp': 'スティネル',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/still_obstinator/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'airship_captain',
    'name_jp': 'クインヴィッド',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/airship_captain/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'special_week',
    'name_jp': 'スペシャルウィーク',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/special_week/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'darkness',
    'name_jp': 'ダクネス',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/darkness/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'samurai_robot_smr22',
    'name_jp': 'ザンテツ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/samurai_robot_smr22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'holysword_girl',
    'name_jp': 'イリノア',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/holysword_girl/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'swallow_knight_3anv',
    'name_jp': 'ユーウェル',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/swallow_knight_3anv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'compliment_oiran_xm22',
    'name_jp': 'キクノ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/compliment_oiran_xm22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'light_ballot23',
    'name_jp': 'ライト',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/light_ballot23/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'stella_ballot23',
    'name_jp': 'ステラ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/stella_ballot23/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'dimension_witch',
    'name_jp': 'ベルセティア',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/dimension_witch/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'veteran_hunter',
    'name_jp': 'ヴェロン',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/veteran_hunter/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'blade_witch',
    'name_jp': 'モルミア',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/blade_witch/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'cursed_girl',
    'name_jp': 'カーラ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/cursed_girl/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'olivia',
    'name_jp': 'オリヴィエ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/olivia/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'kyaru',
    'name_jp': 'キャル',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/kyaru/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'alice_smr20',
    'name_jp': 'アリス',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/alice_smr20/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'konno_junko',
    'name_jp': '紺野純子',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/konno_junko/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'sing_android_hw20',
    'name_jp': 'ディア',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/sing_android_hw20/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'dark_psygirl',
    'name_jp': 'ディーネ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/dark_psygirl/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'devil_leader',
    'name_jp': 'エデュケウス',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/devil_leader/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'silent_ninja',
    'name_jp': 'ヤクモ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/silent_ninja/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'devil_princess_xm20',
    'name_jp': 'アルム',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/devil_princess_xm20/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'summoner_little',
    'name_jp': 'クエット',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/summoner_little/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'noble_sorceress',
    'name_jp': 'メイルビオラ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/noble_sorceress/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'dark_psygirl_dst21',
    'name_jp': 'ディーネ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/dark_psygirl_dst21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'beatrix',
    'name_jp': 'ベアトリクス',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/beatrix/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'blindness_gunner_1halfanv',
    'name_jp': 'セルジール',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/blindness_gunner_1halfanv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'blackflower_wiz',
    'name_jp': 'プリムラ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/blackflower_wiz/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'touyakiren_ceo_hw21',
    'name_jp': 'ラヴ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/touyakiren_ceo_hw21/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'psychic_shouta',
    'name_jp': '伊野里ショウタ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/psychic_shouta/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'summoner_little_2anv',
    'name_jp': 'クエット',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/summoner_little_2anv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'dimension_witch_ny22',
    'name_jp': 'ベルセティア',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/dimension_witch_ny22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'katana_ghost_wt22',
    'name_jp': 'ムラクモ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/katana_ghost_wt22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'estateguild_leader',
    'name_jp': 'ヒルデガード',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/estateguild_leader/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'mirror_witch',
    'name_jp': 'ルイリーズ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/mirror_witch/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'warlock_2halfanv',
    'name_jp': 'リアン',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/warlock_2halfanv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'blackflower_wiz_smr22',
    'name_jp': 'プリムラ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/blackflower_wiz_smr22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'psychic_yamikawa',
    'name_jp': 'ユカリコ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/psychic_yamikawa/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'wind_spgirl_hw22',
    'name_jp': 'シルティー',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/wind_spgirl_hw22/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'asta',
    'name_jp': 'アスタ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/asta/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'horn_mypace',
    'name_jp': 'エルモル',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/horn_mypace/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'veteran_hunter_3anv',
    'name_jp': 'ヴェロン',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/veteran_hunter_3anv/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'rector_sorcerer_playable',
    'name_jp': 'ニルヤーナ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/rector_sorcerer_playable/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'evilloli_master',
    'name_jp': 'タナキエラ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/evilloli_master/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'impostor_priest',
    'name_jp': 'イオレス',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/impostor_priest/square_0.png',
    'rarity': 5
  },
  {
    'unit_id': 'alk',
    'name_jp': 'アルク',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/alk/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'dragon_slayer',
    'name_jp': 'アゼル',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/dragon_slayer/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'lady_summoner',
    'name_jp': 'ビアンカ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/lady_summoner/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'kunoichi',
    'name_jp': 'ハナビ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/kunoichi/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'half_oni_boy',
    'name_jp': 'アスキリマル',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/half_oni_boy/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'master_knight',
    'name_jp': 'グライド',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/master_knight/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'red_gunner',
    'name_jp': 'カノン',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/red_gunner/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'reporter_ny20',
    'name_jp': 'リュリュカ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/reporter_ny20/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'shapely_soldier',
    'name_jp': 'レヴィ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/shapely_soldier/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'crybaby_shooter',
    'name_jp': 'キリ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/crybaby_shooter/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'pirates_gunner',
    'name_jp': 'ヘイズ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/pirates_gunner/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'sanctuary_guard',
    'name_jp': 'ミルミナ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/sanctuary_guard/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'magic_sword_girl',
    'name_jp': 'ナシール',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/magic_sword_girl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'vigilante_boy',
    'name_jp': 'クラマル',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/vigilante_boy/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'yugiri',
    'name_jp': 'ゆうぎり',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/yugiri/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'sorceress_teacher',
    'name_jp': 'ニコラ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/sorceress_teacher/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'alk_1anv',
    'name_jp': 'アルク',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/alk_1anv/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'cool_woman_soldier_xm20',
    'name_jp': 'トレーネ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/cool_woman_soldier_xm20/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'naginata_girl',
    'name_jp': 'マイヒメ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/naginata_girl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'dragon_slayer_smr21',
    'name_jp': 'アゼル',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/dragon_slayer_smr21/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'kyon',
    'name_jp': 'キョン',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/kyon/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'psychic_tomboygirl',
    'name_jp': '緋河リンネ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/psychic_tomboygirl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'psychic_nao',
    'name_jp': '凪原ナオ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/psychic_nao/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'nurse_pirate',
    'name_jp': 'ピシカ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/nurse_pirate/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'shapely_soldier_ny22',
    'name_jp': 'レヴィ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/shapely_soldier_ny22/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'jiangshi_girl',
    'name_jp': 'チェンシー',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/jiangshi_girl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'swallow_knight',
    'name_jp': 'ユーウェル',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/swallow_knight/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'bishop_girl',
    'name_jp': 'リーゼル',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/bishop_girl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'mermaid',
    'name_jp': 'アメリア',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/mermaid/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'alice',
    'name_jp': 'アリス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/alice/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'battle_guild_staff',
    'name_jp': 'シャロン',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/battle_guild_staff/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'spry_sailor',
    'name_jp': 'ラナー',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/spry_sailor/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'deepsea_mage',
    'name_jp': 'ザール',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/deepsea_mage/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'desert_wizard',
    'name_jp': 'モルディアーガ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/desert_wizard/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'onmyo_attendant',
    'name_jp': 'ミズチ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/onmyo_attendant/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'psycho_reaper',
    'name_jp': 'ソーヴィ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/psycho_reaper/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'unicorn_lancer_smr20',
    'name_jp': 'ジェラール',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/unicorn_lancer_smr20/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'pirates_girl_smr20',
    'name_jp': 'マリーナ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/pirates_girl_smr20/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'shy_assassin',
    'name_jp': 'ヴィヴィ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/shy_assassin/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'urban_soldier_ny21',
    'name_jp': 'トリスタ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/urban_soldier_ny21/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'ruin_lady',
    'name_jp': 'ソティエス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/ruin_lady/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'hero_girl',
    'name_jp': 'ネイト',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/hero_girl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'stylish_witch',
    'name_jp': 'ファソン',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/stylish_witch/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'dress_gunner',
    'name_jp': 'エヴリン',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/dress_gunner/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'fox_companion_smr21',
    'name_jp': 'シラノ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/fox_companion_smr21/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'spry_sailor_hw21',
    'name_jp': 'ラナー',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/spry_sailor_hw21/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'psychic_seiji',
    'name_jp': '鷹森セイジ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/psychic_seiji/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'innocent_glaiver',
    'name_jp': 'ファロロ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/innocent_glaiver/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'student_president',
    'name_jp': 'ルシアーダ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/student_president/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'nurse_pirate_smr22',
    'name_jp': 'ピシカ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/nurse_pirate_smr22/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'sand_bandit',
    'name_jp': 'ファラ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/sand_bandit/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'sleep_puppy_vt23',
    'name_jp': 'フィーニ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/sleep_puppy_vt23/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'thunder_dragon',
    'name_jp': 'ラムス',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/thunder_dragon/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'fox_scientist',
    'name_jp': 'ルナール',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/fox_scientist/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'rec_android',
    'name_jp': 'レジス',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/rec_android/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'elf_soldier',
    'name_jp': 'エレンノール',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/elf_soldier/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'cat_shaman',
    'name_jp': 'ジェイ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/cat_shaman/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'minotaur_girl',
    'name_jp': 'ミノ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/minotaur_girl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'docking_beast_xm19',
    'name_jp': 'アウレオ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/docking_beast_xm19/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'black_hair_swordman',
    'name_jp': 'アドーニ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/black_hair_swordman/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'lady_android',
    'name_jp': 'ルディ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/lady_android/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'fake_princess',
    'name_jp': 'プリカ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/fake_princess/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'casino_dealer_smr20',
    'name_jp': 'ネスカ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/casino_dealer_smr20/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'hidden_blader',
    'name_jp': 'ロゼリヤ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/hidden_blader/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'mizuno_ai',
    'name_jp': '水野愛',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/mizuno_ai/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'fox_scientist_hw20',
    'name_jp': 'ルナール',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/fox_scientist_hw20/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'black_hair_swordman_xm20',
    'name_jp': 'アドーニ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/black_hair_swordman_xm20/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'little_wizard',
    'name_jp': 'ト・レレニ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/little_wizard/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'punk_warrior',
    'name_jp': 'エディッタ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/punk_warrior/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'electro_girl',
    'name_jp': 'テレナ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/electro_girl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'secret_observer',
    'name_jp': 'ジゼル',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/secret_observer/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'warashi',
    'name_jp': 'フク',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/warashi/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'lion_boy',
    'name_jp': 'テオ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/lion_boy/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'outlaw_panther_ny22',
    'name_jp': 'クロ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/outlaw_panther_ny22/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'spanner_girl',
    'name_jp': 'エレジア',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/spanner_girl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'scissor_ratgirl',
    'name_jp': 'リンカリーナ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/scissor_ratgirl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'long_hair_swordsman',
    'name_jp': 'オーネスト',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/long_hair_swordsman/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'rural_ladyship',
    'name_jp': 'エコー',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/rural_ladyship/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'marching_rival',
    'name_jp': 'エルメリッサ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/marching_rival/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'hero_mechanic',
    'name_jp': 'インヴェトラ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/hero_mechanic/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'white_tiger',
    'name_jp': 'シロ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/white_tiger/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'tiger_treasure_hunter',
    'name_jp': 'ミア',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/tiger_treasure_hunter/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'birdman',
    'name_jp': 'オロウル',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/birdman/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'samurai',
    'name_jp': 'ソウシロウ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/samurai/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'elf_archer',
    'name_jp': 'メルスール',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/elf_archer/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'dog_slasher',
    'name_jp': 'ヘルガ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/dog_slasher/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'arisa',
    'name_jp': 'アリサ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/arisa/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'bearish_darkwitch_ny20',
    'name_jp': 'レベッカ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/bearish_darkwitch_ny20/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'beast_adventurer',
    'name_jp': 'ルー',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/beast_adventurer/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'timid_kunoichi',
    'name_jp': 'スズカ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/timid_kunoichi/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'tengu_girl',
    'name_jp': 'コハネ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/tengu_girl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'ekaki_onmyoji',
    'name_jp': 'クグイ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/ekaki_onmyoji/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'wild_boy',
    'name_jp': 'ハオ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/wild_boy/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'white_tiger_xm20',
    'name_jp': 'シロ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/white_tiger_xm20/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'ram',
    'name_jp': 'ラム',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/ram/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'wind_striker',
    'name_jp': 'リカルド',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/wind_striker/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'steel_lacrosse',
    'name_jp': 'ミディー',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/steel_lacrosse/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'cool_witch_girl',
    'name_jp': 'ピアモ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/cool_witch_girl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'bird_master',
    'name_jp': 'ルマルク',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/bird_master/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'pilgrim_monk',
    'name_jp': 'マカニ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/pilgrim_monk/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'sanctuary_guard_hw21',
    'name_jp': 'ミルミナ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/sanctuary_guard_hw21/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'sheep_girl',
    'name_jp': 'メリエンナ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/sheep_girl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'ekaki_girl_playable',
    'name_jp': 'リョウキ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/ekaki_girl_playable/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'kung_fu_girl',
    'name_jp': 'フーラン',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/kung_fu_girl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'sing_android',
    'name_jp': 'ディア',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/sing_android/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'unicorn_lancer',
    'name_jp': 'ジェラール',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/unicorn_lancer/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'lightbullet_wiz',
    'name_jp': 'エリヤ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/lightbullet_wiz/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'palpebra_knight',
    'name_jp': 'フィン',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/palpebra_knight/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'palpebra_knight_lady',
    'name_jp': 'キーラ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/palpebra_knight_lady/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'monster_cook',
    'name_jp': 'パルフェ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/monster_cook/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'illusionist',
    'name_jp': 'イルミ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/illusionist/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'unleash_hunter',
    'name_jp': 'ホプル',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/unleash_hunter/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'unyielding_adventurer',
    'name_jp': 'ライア',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/unyielding_adventurer/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'whitedog_beast',
    'name_jp': 'フロレッタ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/whitedog_beast/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'bishop_girl_smr20',
    'name_jp': 'リーゼル',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/bishop_girl_smr20/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'keylock_girl',
    'name_jp': 'キアナ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/keylock_girl/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'resistance_princess',
    'name_jp': 'リリス',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/resistance_princess/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'doctor_machine',
    'name_jp': 'メック',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/doctor_machine/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'woman_knight_1anv',
    'name_jp': 'セシリア',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/woman_knight_1anv/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'sea_violent',
    'name_jp': 'ディレット',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/sea_violent/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'whitedog_beast_vt21',
    'name_jp': 'フロレッタ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/whitedog_beast_vt21/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'sleep_puppy',
    'name_jp': 'フィーニ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/sleep_puppy/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'desert_priest',
    'name_jp': 'サーリハ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/desert_priest/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'psycho_reaper_smr21',
    'name_jp': 'ソーヴィ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/psycho_reaper_smr21/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'stella_2anv',
    'name_jp': 'ステラ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/stella_2anv/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'devil_clown_xm21',
    'name_jp': 'フォルス',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/devil_clown_xm21/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'advanced_soldier',
    'name_jp': 'カラビナ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/advanced_soldier/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'pbc_operator',
    'name_jp': 'クラルテ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/pbc_operator/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'twin_blader_smr22',
    'name_jp': 'ユナ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/twin_blader_smr22/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'reformist_prince',
    'name_jp': 'ヴァーレイン',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/reformist_prince/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'devil_princess',
    'name_jp': 'アルム',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/devil_princess/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'battle_maid',
    'name_jp': 'マリアンネ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/battle_maid/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'undead_boy',
    'name_jp': 'アンディ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/undead_boy/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'warlock',
    'name_jp': 'リアン',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/warlock/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'swallow_knight_ny20',
    'name_jp': 'ユーウェル',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/swallow_knight_ny20/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'sword_beauty',
    'name_jp': 'クォーツァー',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/sword_beauty/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'touyakiren_ceo',
    'name_jp': 'ラヴ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/touyakiren_ceo/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'blindness_gunner',
    'name_jp': 'セルジール',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/blindness_gunner/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'luna',
    'name_jp': 'ルナ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/luna/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'lady_gunner_smr20',
    'name_jp': 'マルグリット',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/lady_gunner_smr20/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'dinosaur_hunter',
    'name_jp': 'グリーグ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/dinosaur_hunter/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'crazy_doctor',
    'name_jp': 'ブライス',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/crazy_doctor/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'yamada_tae',
    'name_jp': '山田たえ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/yamada_tae/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'reaper_girl_hw20',
    'name_jp': 'ファルチェ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/reaper_girl_hw20/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'illegal_herbalist',
    'name_jp': 'ゼルマ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/illegal_herbalist/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'devil_woman_soldier_1anv',
    'name_jp': 'アーリィ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/devil_woman_soldier_1anv/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'subaru',
    'name_jp': 'ナツキ・スバル',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/subaru/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'mystery_agent',
    'name_jp': 'エドワルド',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/mystery_agent/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'walking_armor',
    'name_jp': 'ロンダール',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/walking_armor/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'desert_caravans',
    'name_jp': 'タウィール',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/desert_caravans/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'koizumi_ituki',
    'name_jp': '古泉一樹',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/koizumi_ituki/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'formercorrupt_detective',
    'name_jp': 'ヴィルジア',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/formercorrupt_detective/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'psychic_projection',
    'name_jp': '影丘リュウイチ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/psychic_projection/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'informant_2anv',
    'name_jp': 'シオン',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/informant_2anv/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'kazuma',
    'name_jp': 'カズマ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/kazuma/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'psychic_tomboygirl_hw22',
    'name_jp': 'ヒカワリンネ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/psychic_tomboygirl_hw22/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'herbalist_xm22',
    'name_jp': 'ハートリーフ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/herbalist_xm22/square_0.png',
    'rarity': 4
  },
  {
    'unit_id': 'alchemist',
    'name_jp': 'リリル',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/alchemist/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'pretty_witch',
    'name_jp': 'メイミー',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/pretty_witch/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'gunslinger',
    'name_jp': 'イリス',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/gunslinger/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'monster_hunter',
    'name_jp': 'ハーシュ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/monster_hunter/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'black_doctor',
    'name_jp': 'ジン',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/black_doctor/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'cool_woman_soldier',
    'name_jp': 'トレーネ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/cool_woman_soldier/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'berserker',
    'name_jp': 'ギルスラッド',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/berserker/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'fire_shaman',
    'name_jp': 'エンニ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/fire_shaman/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'disciplined_swordman',
    'name_jp': 'ジェイク',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/disciplined_swordman/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'birdwoman',
    'name_jp': 'クラン',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/birdwoman/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'tradition_healer',
    'name_jp': 'ハリシャ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/tradition_healer/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'brave_mouse',
    'name_jp': 'スヴェン',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/brave_mouse/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'sewing_girl',
    'name_jp': 'リリアン',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/sewing_girl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'wolf_assassin_wt21',
    'name_jp': 'クラウス',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/wolf_assassin_wt21/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'sniper',
    'name_jp': 'ケイロス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/sniper/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'urban_soldier',
    'name_jp': 'トリスタ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/urban_soldier/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'hard_face_soldier',
    'name_jp': 'ヴァルター',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/hard_face_soldier/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'nurse',
    'name_jp': 'エルザ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/nurse/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'wolf_assassin',
    'name_jp': 'クラウス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/wolf_assassin/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'fox_companion',
    'name_jp': 'シラノ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/fox_companion/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'depraved_monk',
    'name_jp': 'カイユ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/depraved_monk/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'sailor_girl',
    'name_jp': 'ラッティ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/sailor_girl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'cute_fafnir',
    'name_jp': 'ファフ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/cute_fafnir/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'mens_attire_girl',
    'name_jp': 'リコ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/mens_attire_girl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'dryad_xm19',
    'name_jp': 'チャルア',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/dryad_xm19/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'junior_yearngirl',
    'name_jp': 'クラーラ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/junior_yearngirl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'little_shaman',
    'name_jp': 'サマサ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/little_shaman/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'scout_girl',
    'name_jp': 'リッタ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/scout_girl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'twin_blader',
    'name_jp': 'ユナ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/twin_blader/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'bee_girl',
    'name_jp': 'ホーニィ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/bee_girl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'lightning_fighter',
    'name_jp': 'タイガ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/lightning_fighter/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'outlaw_panther',
    'name_jp': 'クロ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/outlaw_panther/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'wolf_swordsman',
    'name_jp': 'アルベルト',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/wolf_swordsman/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'oni_girl',
    'name_jp': 'カヅチ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/oni_girl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'sociable_mestizo',
    'name_jp': 'タチアナ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/sociable_mestizo/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'magic_boy',
    'name_jp': 'コルト',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/magic_boy/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'student_gunsmith',
    'name_jp': 'シャ・スス',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/student_gunsmith/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'fortuneteller',
    'name_jp': 'フォウラ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/fortuneteller/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'cat_fighter_ny20',
    'name_jp': 'ミュウ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/cat_fighter_ny20/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'old_mercenary',
    'name_jp': 'バルゲン',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/old_mercenary/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'floating_girl',
    'name_jp': 'フラーナ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/floating_girl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'conjurer_girl',
    'name_jp': 'フィ・ノノア',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/conjurer_girl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'highlander',
    'name_jp': 'エヴァン',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/highlander/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'dryad',
    'name_jp': 'チャルア',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/dryad/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'lich',
    'name_jp': 'レシタール',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/lich/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'casino_dealer',
    'name_jp': 'ネスカ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/casino_dealer/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'cat_fighter',
    'name_jp': 'ミュウ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/cat_fighter/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'devil_clown',
    'name_jp': 'フォルス',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/devil_clown/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'herbalist',
    'name_jp': 'ハートリーフ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/herbalist/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'spearman',
    'name_jp': 'コナー',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/spearman/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'trap_errand',
    'name_jp': 'ジャスター',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/trap_errand/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'gang_girl',
    'name_jp': 'ケイト',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/gang_girl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'lazy_genious',
    'name_jp': 'ネティ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/lazy_genious/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'rookie_adventurer',
    'name_jp': 'ミレット',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/rookie_adventurer/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'priest',
    'name_jp': 'コリーナ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/priest/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'lady_gunner',
    'name_jp': 'マルグリット',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/lady_gunner/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'woman_knight',
    'name_jp': 'セシリア',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/woman_knight/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'docking_beast',
    'name_jp': 'アウレオ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/docking_beast/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'exorcist_oldman',
    'name_jp': 'ラウル',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/exorcist_oldman/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'half_knight',
    'name_jp': 'ミレス',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/half_knight/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'reporter',
    'name_jp': 'リュリュカ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/reporter/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'wild_wolfgirl',
    'name_jp': 'カロ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/wild_wolfgirl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'moth_girl',
    'name_jp': 'モーラ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/moth_girl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'priest_hw20',
    'name_jp': 'コリーナ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/priest_hw20/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'junior_soldier',
    'name_jp': 'クシューハ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/junior_soldier/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'skateboard_boy',
    'name_jp': 'アクセム',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/skateboard_boy/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'kids_gunner',
    'name_jp': 'ル・ルト',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/chars/kids_gunner/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'reaper_girl',
    'name_jp': 'ファルチェ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/reaper_girl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'chakram_shooter',
    'name_jp': 'ジャリル',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/chakram_shooter/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'devil_woman_soldier',
    'name_jp': 'アーリィ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/devil_woman_soldier/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'informant',
    'name_jp': 'シオン',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/informant/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'arabic_swordman',
    'name_jp': 'アディル',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/arabic_swordman/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'dark_nursemaid',
    'name_jp': 'ドロセア',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/dark_nursemaid/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'bearish_darkwitch',
    'name_jp': 'レベッカ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/bearish_darkwitch/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'monster_attract',
    'name_jp': 'ノーセル',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/monster_attract/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'delusion_girl',
    'name_jp': 'メリル',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/delusion_girl/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'delusion_girl_xm20',
    'name_jp': 'メリル',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/delusion_girl_xm20/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'mummy_boy',
    'name_jp': 'タルハ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/mummy_boy/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'revenge_rabbit',
    'name_jp': 'コーディ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/revenge_rabbit/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'assistant_boy',
    'name_jp': 'ルシル',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/chars/assistant_boy/square_0.png',
    'rarity': 3
  },
  {
    'unit_id': 'guardian_golem',
    'name_jp': 'ゴーレム',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/guardian_golem/square_0.png',
    'rarity': 2
  },
  {
    'unit_id': 'owl',
    'name_jp': 'ポジート',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/owl/square_0.png',
    'rarity': 2
  },
  {
    'unit_id': 'fox',
    'name_jp': 'カマイタチ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/fox/square_0.png',
    'rarity': 2
  },
  {
    'unit_id': 'towa_namakubi',
    'name_jp': 'C・F・キセキ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/towa_namakubi/square_0.png',
    'rarity': 2
  },
  {
    'unit_id': 'towa_vtuber',
    'name_jp': '斗和キセキ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/towa_vtuber/square_0.png',
    'rarity': 2
  },
  {
    'unit_id': 'kinoko',
    'name_jp': 'キノ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/kinoko/square_0.png',
    'rarity': 1
  },
  {
    'unit_id': 'slango_red',
    'name_jp': 'レッドプル',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/slango_red/square_0.png',
    'rarity': 1
  },
  {
    'unit_id': 'spirit_fire',
    'name_jp': 'ファイアスピリ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/chars/spirit_fire/square_0.png',
    'rarity': 1
  },
  {
    'unit_id': 'slango_blue',
    'name_jp': 'ブループル',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/chars/slango_blue/square_0.png',
    'rarity': 1
  },
  {
    'unit_id': 'slango_yellow',
    'name_jp': 'イエロープル',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/slango_yellow/square_0.png',
    'rarity': 1
  },
  {
    'unit_id': 'paralysis_hedgehog',
    'name_jp': 'パララット',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/chars/paralysis_hedgehog/square_0.png',
    'rarity': 1
  },
  {
    'unit_id': 'slango_green',
    'name_jp': 'グリーンプル',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/chars/slango_green/square_0.png',
    'rarity': 1
  }
];
const exist_equips = [
  {
    'unit_id': 'acce_0011_storyevent',
    'name_jp': 'ゲノムピアッサー',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0011_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0018_decay',
    'name_jp': 'ダイモスの腕輪',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0018_decay.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0022_scollab',
    'name_jp': '補欠の紋章',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0022_scollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0031_Pcollab',
    'name_jp': 'トリックギフト',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0031_Pcollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0034_storyevent',
    'name_jp': 'スクエアグラス',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0034_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0041_storyevent',
    'name_jp': 'レッドストライフ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0041_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0030',
    'name_jp': '灼鉞',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0030.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0035_boss_unique',
    'name_jp': '豪縫ベアZ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0035_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0042_raid',
    'name_jp': 'ハルボーマン',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0042_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0009',
    'name_jp': '占事略決',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0009.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0036_storyevent',
    'name_jp': 'フェスのひみつ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0036_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0037_storyevent',
    'name_jp': '獅王公記',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0037_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0016',
    'name_jp': 'プレデター',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0016.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0019_raid',
    'name_jp': '灼炎竜弓',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0019_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0017_boss_unique',
    'name_jp': '古王の拳',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0017_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0028_storyevent',
    'name_jp': 'ジギーウォーデン',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0028_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0032_boss_unique',
    'name_jp': '熊嵐',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0032_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_0009_coop',
    'name_jp': '華弩魔-II',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0009_coop.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_0010_storyevent',
    'name_jp': 'アルテアバスター',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0010_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'shield_0011',
    'name_jp': '護神の大盾',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0011.png',
    'rarity': 5
  },
  {
    'unit_id': 'shield_0012',
    'name_jp': '太古の盾',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0012.png',
    'rarity': 5
  },
  {
    'unit_id': 'shield_0026_storyevent',
    'name_jp': '一獣の王盾',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0026_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'shield_0031_haniwa',
    'name_jp': 'ハニホムラ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0031_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0020_boss_unique',
    'name_jp': '古王の槍',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0020_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0033_Gcollab',
    'name_jp': 'ブリューナク',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0033_Gcollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0034_haniwa',
    'name_jp': 'ハニクレイトス',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0034_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0040_raid',
    'name_jp': 'ドリトル',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0040_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0016_raid',
    'name_jp': '灼炎竜杖',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0016_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0017_boss_unique',
    'name_jp': '古王の杖',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0017_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0038_KCollab',
    'name_jp': 'エクスプローダー',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0038_KCollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0012',
    'name_jp': 'プロメテウスの剣',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0012.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0038_storyevent',
    'name_jp': 'ゲノムスライサー',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0038_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0045_score',
    'name_jp': '七殺鞭',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0045_score.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0047_scollab',
    'name_jp': '勇者のメガホン',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0047_scollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0050_boss_unique',
    'name_jp': '鬼鉈',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0050_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0054_coop',
    'name_jp': 'ラム・フラム',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0054_coop.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0060_raid',
    'name_jp': 'ネヴァーマインド',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0060_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0008_ZCollab',
    'name_jp': '乙女のリボン',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0008_ZCollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0013_RCollab',
    'name_jp': '徽章のレプリカ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0013_RCollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0020_boss_unique',
    'name_jp': 'アクラゾブ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0020_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0030_storyevent',
    'name_jp': 'ムハタムラムズ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0030_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0042_storyevent',
    'name_jp': 'ストライプフロート',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0042_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0010',
    'name_jp': 'デスシックル',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0010.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0023_RCollab',
    'name_jp': 'モーニングスター',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0023_RCollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0027_coop',
    'name_jp': 'バラスタフ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0027_coop.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0029_storyevent',
    'name_jp': '虚城斧',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0029_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0031_haniwa',
    'name_jp': 'ハニレス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0031_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0020_raid',
    'name_jp': '水蝕竜書',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0020_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0029_scollab',
    'name_jp': '読み古された小説',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0029_scollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0020_score',
    'name_jp': '天相弓',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0020_score.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0020_boss_unique',
    'name_jp': '海淵の鋏爪',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0020_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0021_storyevent',
    'name_jp': '虚城拳',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0021_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0029_boss_unique',
    'name_jp': 'ザカリク',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0029_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0033_raid',
    'name_jp': 'ザラタ・ララス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0033_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_0005_storyevent',
    'name_jp': 'ＭＭ28',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0005_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_0012_boss_unique',
    'name_jp': 'ＳＫ５０９',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0012_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_0013_boss_unique',
    'name_jp': '叉鬼の猟銃',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0013_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_0015_haniwa',
    'name_jp': 'ハニランチャー',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0015_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'shield_0014_xmas',
    'name_jp': '聖鈴の円盾',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0014_xmas.png',
    'rarity': 5
  },
  {
    'unit_id': 'shield_0018_boss_unique',
    'name_jp': '海淵の殻盾',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0018_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'shield_0028_haniwa',
    'name_jp': 'ハニホプロン',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0028_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0011',
    'name_jp': 'オケアノスの槍',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0011.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0017',
    'name_jp': '海王の槍',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0017.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0029_raid',
    'name_jp': '水蝕竜槍',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0029_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0036_raid',
    'name_jp': 'ムーンダンス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0036_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0015',
    'name_jp': '潮老の杖',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0015.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0025',
    'name_jp': 'ブラウガンド',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0025.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0033_Pcollab',
    'name_jp': 'コスモブルーロッド',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0033_Pcollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0039_KCollab',
    'name_jp': 'アクシズロッド',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0039_KCollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0043_bcollab',
    'name_jp': 'ノエルの杖Ｒ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0043_bcollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0025_boss_unique',
    'name_jp': '海淵の棘刃',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0025_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0036_storyevent',
    'name_jp': 'アマルハラフ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0036_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0037_coop',
    'name_jp': 'アレート・ロー',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0037_coop.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0041_storyevent',
    'name_jp': 'プリズムブレード',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0041_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0042_decay',
    'name_jp': 'ユトゥルナの扇',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0042_decay.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0051_storyevent',
    'name_jp': '勿忘の罪剣',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0051_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0061',
    'name_jp': 'ザストマカナ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0061.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0062_storyevent',
    'name_jp': 'エンカウンター',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0062_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0063_storyevent',
    'name_jp': 'ヴィクトリアス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0063_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0073_raid',
    'name_jp': 'ジュアンリコ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0073_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0044_haniwa',
    'name_jp': 'ハニンバル',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0044_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0047',
    'name_jp': 'アロランドネモ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0047.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0009',
    'name_jp': 'トールの鎚',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0009.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0017',
    'name_jp': '虎王斧',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0017.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0022_storyevent',
    'name_jp': '前鬼の斧',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0022_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0025_decay',
    'name_jp': 'アイガイオンの斧',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0025_decay.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0032_raid',
    'name_jp': 'ペインキラー',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0032_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0038_haniwa',
    'name_jp': 'ハニハガマ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0038_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0022_raid',
    'name_jp': '黒竜雷本',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0022_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0028_storyevent',
    'name_jp': 'アルケウスの禁書',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0028_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0018_coop',
    'name_jp': '海馬雷弓',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0018_coop.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0025_raid',
    'name_jp': 'ワンモアタイム',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0025_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0019_boss_unique',
    'name_jp': '父祖の拳鍔',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0019_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0040_haniwa',
    'name_jp': 'ハニーレイ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0040_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_0011_score',
    'name_jp': '天機銃',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0011_score.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_0017_storyevent',
    'name_jp': 'スマグルングガン',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0017_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0016',
    'name_jp': '霊樹の槍',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0016.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0023_boss_unique',
    'name_jp': '父祖の戦棍',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0023_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0025',
    'name_jp': 'ボルトショッカー',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0025.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0009',
    'name_jp': 'アストロラーベ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0009.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0020_boss_unique',
    'name_jp': '父祖の王錫',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0020_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0021_storyevent',
    'name_jp': 'モスニアタクト',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0021_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0019',
    'name_jp': '黒竜雷剣',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0019.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0043_boss_unique',
    'name_jp': 'グローミチ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0043_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0044_storyevent',
    'name_jp': '紫電真打',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0044_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0046_haniwa',
    'name_jp': 'ハニパネウス',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0046_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0005_PCollab',
    'name_jp': 'アメスの衛守',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0005_PCollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0021_storyevent',
    'name_jp': '清夏のリボン',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0021_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0023_boss_unique',
    'name_jp': '風将の爆装',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0023_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0038_storyevent',
    'name_jp': 'プロトモフルンNR',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0038_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0040_storyevent',
    'name_jp': 'サイレントイノセンス',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0040_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0046_bcollab',
    'name_jp': 'ユノのペンダントＲ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0046_bcollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0018_boss_unique',
    'name_jp': '死皇の斧',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0018_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0026_raid',
    'name_jp': '殲風竜斧',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0026_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0015_storyevent',
    'name_jp': 'ヴァレント伯の手記',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0015_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0016_boss_unique',
    'name_jp': '死皇の書',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0016_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0027_haniwa',
    'name_jp': 'ハニクシメネス',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0027_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0009',
    'name_jp': 'アイオロスの弓',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0009.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0010',
    'name_jp': 'メテオラ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0010.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0028_boss_unique',
    'name_jp': '風将の強弓',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0028_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0029_decay',
    'name_jp': 'オルフェウスの竪琴',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0029_decay.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0035_haniwa',
    'name_jp': 'ハニンゴ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0035_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0026_raid',
    'name_jp': '聖柊の篭手',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0026_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_0002',
    'name_jp': '船上式三四三号銃',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0002.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_0018_haniwa',
    'name_jp': 'ハニヘイヘ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0018_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'shield_0025_boss_unique',
    'name_jp': '風将の骨盾',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0025_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0018',
    'name_jp': '獣将の矛',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0018.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0022_coop',
    'name_jp': '方天画戟',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0022_coop.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0026_storyevent',
    'name_jp': '天狗堂の筆',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0026_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0028_score',
    'name_jp': '天同槍',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0028_score.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0013',
    'name_jp': '冥王の錫杖',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0013.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0026_raid',
    'name_jp': '聖柊の棘杖',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0026_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0042_haniwa',
    'name_jp': 'ハニレアース',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0042_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0022_boss_unique',
    'name_jp': '死皇の剣',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0022_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0033_decay',
    'name_jp': 'スコルの剣',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0033_decay.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0034_raid',
    'name_jp': '殲風竜剣',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0034_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0058_PCollab',
    'name_jp': 'うさぎさんソード',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0058_PCollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0059_storyevent',
    'name_jp': 'ディストルテイン',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0059_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0064_raid',
    'name_jp': 'アシッドスカイ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0064_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0065_raid',
    'name_jp': 'ベルドゥレーメン',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0065_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0068_coop',
    'name_jp': 'エペ・ラファル',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0068_coop.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0010_ZCollab',
    'name_jp': '大事そうな包帯',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0010_ZCollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0024_raid_revival',
    'name_jp': '光芒竜冠',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0024_raid_revival.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0025_haniwa',
    'name_jp': 'ハニイオン',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0025_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0039_storyevent',
    'name_jp': 'スペシャルドリーマー',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0039_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0008',
    'name_jp': 'ウコンバサラ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0008.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0028_boss_unique',
    'name_jp': 'サプレッション',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0028_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0039_haniwa',
    'name_jp': 'ハニグスター',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0039_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0013',
    'name_jp': 'スクリプチャー',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0013.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0017_raid',
    'name_jp': '光芒竜弓',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0017_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0026_decay',
    'name_jp': 'ハイペリオンの弓',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0026_decay.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0030_haniwa',
    'name_jp': 'ハニカシ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0030_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0033_raid',
    'name_jp': 'ティル',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0033_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0023',
    'name_jp': 'トーテムセスタス',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0023.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0024_raid',
    'name_jp': 'トリッククロ―',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0024_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0036',
    'name_jp': 'ノブリージュ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0036.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0039_raid',
    'name_jp': 'リ・レントリス',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0039_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_0004_boss_unique',
    'name_jp': 'インサニティ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0004_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_rare5_positron_shooter',
    'name_jp': 'ポジトロンシューター',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_rare5_positron_shooter.png',
    'rarity': 5
  },
  {
    'unit_id': 'shield_0013',
    'name_jp': 'オブストラクター',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0013.png',
    'rarity': 5
  },
  {
    'unit_id': 'shield_0020_boss_unique',
    'name_jp': 'ノスタルジア',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0020_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0030_boss_unique',
    'name_jp': 'ヴィジランス',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0030_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0039_boss_unique',
    'name_jp': '怨嗟の転槍',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0039_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0024_raid',
    'name_jp': 'トリートワンド',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0024_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0027_boss_unique',
    'name_jp': 'リストレイント',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0027_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0030_haniwa',
    'name_jp': 'ハニイノーネ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0030_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0011',
    'name_jp': 'ヘイムダルの剣',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0011.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0026_PCollab',
    'name_jp': 'プリンセスソード',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0026_PCollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0029_boss_unique',
    'name_jp': 'カーディナル',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0029_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0031_storyevent',
    'name_jp': '盟約の剣',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0031_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0032_score',
    'name_jp': '天府剣',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0032_score.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0055_story_event',
    'name_jp': 'WBR-01',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0055_story_event.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0066_KCollab',
    'name_jp': 'クルセイダーソード',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0066_KCollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0072_storyevent',
    'name_jp': 'ナインズワン',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0072_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0009_ZCollab',
    'name_jp': '誰かのサングラス',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0009_ZCollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0026_storyevent',
    'name_jp': '漆黒のレザーバッグ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0026_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0032_boss_unique',
    'name_jp': '怨嗟の外套',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0032_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0020_raid',
    'name_jp': '凶闇竜鎌',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0020_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0036_haniwa',
    'name_jp': 'ハニコリ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0036_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0037',
    'name_jp': 'グリーフサイス',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0037.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0040_raid',
    'name_jp': 'バードリブローキン',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0040_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0014',
    'name_jp': '妖怪百名帳',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0014.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0017_boss_unique',
    'name_jp': '傲慢の書',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0017_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0018_PCollab',
    'name_jp': 'Ｃ・グリモワール',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0018_PCollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0024_RCollab',
    'name_jp': 'ルグニカ童話集写本',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0024_RCollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0025_decay',
    'name_jp': 'ダフニスの石版',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0025_decay.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0032_story_event',
    'name_jp': '夢想の史記',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0032_story_event.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0034_haniwa',
    'name_jp': 'ハニラダム',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0034_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0038_storyevent',
    'name_jp': 'エイトランレポート',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0038_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0014',
    'name_jp': '愚者の弓',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0014.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0009',
    'name_jp': 'オルクスの拳',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0009.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0025_storyevent',
    'name_jp': 'ウォールクラッカー',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0025_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0030_haniwa',
    'name_jp': 'ハニクトール',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0030_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_0006_raid',
    'name_jp': '凶闇竜銃',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0006_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'shield_0007',
    'name_jp': '天磐盾',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0007.png',
    'rarity': 5
  },
  {
    'unit_id': 'shield_0022_storyevent',
    'name_jp': 'グラッジシールド',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0022_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0021_boss_unique',
    'name_jp': '暴食の槍',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0021_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0035_boss_unique',
    'name_jp': '岩融',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0035_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0038_boss_unique',
    'name_jp': '怨嗟の槍',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0038_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0041_haniwa',
    'name_jp': 'ハニテッコン',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0041_haniwa.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0019_boss_unique',
    'name_jp': '怠惰の杖',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0019_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0029_boss_unique',
    'name_jp': '鳴狐の杖',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0029_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0034_boss_unique',
    'name_jp': '怨嗟の杖',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0034_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0037_decay',
    'name_jp': 'オシリスの杖',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0037_decay.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0040_raid',
    'name_jp': 'ルナシーフリンジ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0040_raid.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0041_storyevent',
    'name_jp': 'アナザーヴォイド',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0041_storyevent.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_rare5_24_7',
    'name_jp': '24／7',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_rare5_24_7.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0004',
    'name_jp': '天羽々斬',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0004.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0020_coop',
    'name_jp': '極彩宝石の双剣',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0020_coop.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0028',
    'name_jp': 'ティルヴィング',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0028.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0030_coop',
    'name_jp': '牛鬼の尾',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0030_coop.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0039_Gcollab',
    'name_jp': 'グラム',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0039_Gcollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0040_boss_unique',
    'name_jp': '殺生石の匕首',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0040_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0056_score',
    'name_jp': '天梁刀',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0056_score.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0069_bcollab',
    'name_jp': '断魔の剣Ｒ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0069_bcollab.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0001_total',
    'name_jp': '雫のペンダント',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0001_total.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0002',
    'name_jp': 'プリイグナイター',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0002.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0003',
    'name_jp': '双牙のネックレス',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0003.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0004',
    'name_jp': '世界樹の朝露',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0004.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0007_total',
    'name_jp': '雫のブレスレット',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0007_total.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0014_boss_unique',
    'name_jp': '八咫鏡',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0014_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0015_boss_unique',
    'name_jp': '八尺瓊勾玉',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0015_boss_unique.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0016_total',
    'name_jp': '雫のチョーカー',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0016_total.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0017_total',
    'name_jp': '交輪のペンダント',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0017_total.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0019_total',
    'name_jp': '交輪のブレスレット',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0019_total.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0027_newbie',
    'name_jp': '星芥の腕輪',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0027_newbie.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0028_newbie',
    'name_jp': '星芥のベルト',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0028_newbie.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0029_newbie',
    'name_jp': '星芥の宝冠',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0029_newbie.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0035_total',
    'name_jp': '交輪のイヤリング',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0035_total.png',
    'rarity': 5
  },
  {
    'unit_id': 'acce_0045_total',
    'name_jp': '交輪のブローチ',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0045_total.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0024',
    'name_jp': 'パラシュ',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0024.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0041',
    'name_jp': 'アダマス',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0041.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0026',
    'name_jp': '太平清領',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0026.png',
    'rarity': 5
  },
  {
    'unit_id': 'book_0033_newbie',
    'name_jp': '星芥の異本',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0033_newbie.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0022',
    'name_jp': 'ミストルテイン',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0022.png',
    'rarity': 5
  },
  {
    'unit_id': 'bow_0031_newbie',
    'name_jp': '星芥の滑車弓',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0031_newbie.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0027',
    'name_jp': 'ポルックス',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0027.png',
    'rarity': 5
  },
  {
    'unit_id': 'fist_0035_newbie',
    'name_jp': '星芥の拳鍔',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0035_newbie.png',
    'rarity': 5
  },
  {
    'unit_id': 'gun_0016_newbie',
    'name_jp': '星芥の騎兵銃',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0016_newbie.png',
    'rarity': 5
  },
  {
    'unit_id': 'main_chapter_orb_1',
    'name_jp': '精霊の微笑み',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/main_chapter_orb_1.png',
    'rarity': 5
  },
  {
    'unit_id': 'main_chapter_orb_10',
    'name_jp': 'その手を伸ばして',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/main_chapter_orb_10.png',
    'rarity': 5
  },
  {
    'unit_id': 'main_chapter_orb_11',
    'name_jp': '黄金の道',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/main_chapter_orb_11.png',
    'rarity': 5
  },
  {
    'unit_id': 'main_chapter_orb_2',
    'name_jp': '砂海の友情',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/main_chapter_orb_2.png',
    'rarity': 5
  },
  {
    'unit_id': 'main_chapter_orb_3',
    'name_jp': '女海賊の狂宴',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/main_chapter_orb_3.png',
    'rarity': 5
  },
  {
    'unit_id': 'main_chapter_orb_4',
    'name_jp': '爪牙の交わり',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/main_chapter_orb_4.png',
    'rarity': 5
  },
  {
    'unit_id': 'main_chapter_orb_5',
    'name_jp': '歌姫の調べ',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/main_chapter_orb_5.png',
    'rarity': 5
  },
  {
    'unit_id': 'main_chapter_orb_6',
    'name_jp': '人妖百鬼夜行',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/main_chapter_orb_6.png',
    'rarity': 5
  },
  {
    'unit_id': 'main_chapter_orb_7',
    'name_jp': '炎の絆',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/main_chapter_orb_7.png',
    'rarity': 5
  },
  {
    'unit_id': 'main_chapter_orb_8',
    'name_jp': '継がれゆくもの',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/main_chapter_orb_8.png',
    'rarity': 5
  },
  {
    'unit_id': 'main_chapter_orb_9',
    'name_jp': '天逆の決意',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/main_chapter_orb_9.png',
    'rarity': 5
  },
  {
    'unit_id': 'practice_trophy_1',
    'name_jp': '守りを超越した証',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/practice_trophy_1.png',
    'rarity': 5
  },
  {
    'unit_id': 'practice_trophy_2',
    'name_jp': '呪いを超越した証',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/practice_trophy_2.png',
    'rarity': 5
  },
  {
    'unit_id': 'practice_trophy_3',
    'name_jp': '強さを超越した証',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/practice_trophy_3.png',
    'rarity': 5
  },
  {
    'unit_id': 'practice_trophy_4',
    'name_jp': '速さを超越した証',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/practice_trophy_4.png',
    'rarity': 5
  },
  {
    'unit_id': 'practice_trophy_5',
    'name_jp': '硬さを超越した証',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/practice_trophy_5.png',
    'rarity': 5
  },
  {
    'unit_id': 'shield_0029_newbie',
    'name_jp': '星芥の獅盾',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0029_newbie.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0005',
    'name_jp': 'マルテ',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0005.png',
    'rarity': 5
  },
  {
    'unit_id': 'spear_0037_newbie',
    'name_jp': '星芥の二又槍',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0037_newbie.png',
    'rarity': 5
  },
  {
    'unit_id': 'staff_0044',
    'name_jp': 'テュルソス',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0044.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0005',
    'name_jp': 'デュランダル',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0005.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0057_newbie',
    'name_jp': '星芥の鎌剣',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0057_newbie.png',
    'rarity': 5
  },
  {
    'unit_id': 'sword_0070_epuration',
    'name_jp': 'リベレイター',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0070_epuration.png',
    'rarity': 5
  },
  {
    'unit_id': 'trophy_maou_hunt',
    'name_jp': '粛清の証',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/trophy_maou_hunt.png',
    'rarity': 5
  },
  {
    'unit_id': 'axe_0013',
    'name_jp': '古代の戦斧',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0013.png',
    'rarity': 4
  },
  {
    'unit_id': 'book_0011',
    'name_jp': '石兵要術',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0011.png',
    'rarity': 4
  },
  {
    'unit_id': 'fist_0016_raid',
    'name_jp': '灼炎竜拳',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0016_raid.png',
    'rarity': 4
  },
  {
    'unit_id': 'fist_0037_storyevent',
    'name_jp': 'ヴィゴリット',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0037_storyevent.png',
    'rarity': 4
  },
  {
    'unit_id': 'fist_0038_raid',
    'name_jp': 'ラブレス',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0038_raid.png',
    'rarity': 4
  },
  {
    'unit_id': 'spear_0003',
    'name_jp': 'ジャベリン',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0003.png',
    'rarity': 4
  },
  {
    'unit_id': 'staff_0028',
    'name_jp': 'ラヴァセプター',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0028.png',
    'rarity': 4
  },
  {
    'unit_id': 'sword_0024_coop',
    'name_jp': '七支銅刀',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0024_coop.png',
    'rarity': 4
  },
  {
    'unit_id': 'sword_0048_raid_revival',
    'name_jp': '灼炎竜剣',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0048_raid_revival.png',
    'rarity': 4
  },
  {
    'unit_id': 'axe_0021_storyevent',
    'name_jp': 'ゴールドレーク',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0021_storyevent.png',
    'rarity': 4
  },
  {
    'unit_id': 'book_0019_coop',
    'name_jp': '海賊用兵術',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0019_coop.png',
    'rarity': 4
  },
  {
    'unit_id': 'book_0030_raid',
    'name_jp': 'パラノイド',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0030_raid.png',
    'rarity': 4
  },
  {
    'unit_id': 'bow_0021',
    'name_jp': 'メアグルンボウ',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0021.png',
    'rarity': 4
  },
  {
    'unit_id': 'bow_0027_boss_unique',
    'name_jp': 'ペイヤイネン',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0027_boss_unique.png',
    'rarity': 4
  },
  {
    'unit_id': 'fist_0011',
    'name_jp': '大烏賊爪',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0011.png',
    'rarity': 4
  },
  {
    'unit_id': 'fist_0034_storyevent',
    'name_jp': '獅子の篭手',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0034_storyevent.png',
    'rarity': 4
  },
  {
    'unit_id': 'gun_0003_raid',
    'name_jp': '水蝕竜銃',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0003_raid.png',
    'rarity': 4
  },
  {
    'unit_id': 'shield_0003',
    'name_jp': 'ダイヤシールド',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0003.png',
    'rarity': 4
  },
  {
    'unit_id': 'shield_0023_storyevent',
    'name_jp': 'ＪＩＴバックラー',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0023_storyevent.png',
    'rarity': 4
  },
  {
    'unit_id': 'spear_0032_storyevent',
    'name_jp': '王国兵制式長槍',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0032_storyevent.png',
    'rarity': 4
  },
  {
    'unit_id': 'staff_0035',
    'name_jp': 'アーデルシルム',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0035.png',
    'rarity': 4
  },
  {
    'unit_id': 'staff_0036_storyevent',
    'name_jp': 'ラクリマウェリタス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0036_storyevent.png',
    'rarity': 4
  },
  {
    'unit_id': 'sword_0017',
    'name_jp': '貝帝の剣',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0017.png',
    'rarity': 4
  },
  {
    'unit_id': 'sword_0049_raid_revival',
    'name_jp': '水蝕竜鞭',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0049_raid_revival.png',
    'rarity': 4
  },
  {
    'unit_id': 'acce_0006_storyevent',
    'name_jp': '門鍵の首飾り',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0006_storyevent.png',
    'rarity': 4
  },
  {
    'unit_id': 'acce_0043_storyevent',
    'name_jp': 'メモリアルカメラ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0043_storyevent.png',
    'rarity': 4
  },
  {
    'unit_id': 'axe_0033_boss_unique',
    'name_jp': 'ターポル',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0033_boss_unique.png',
    'rarity': 4
  },
  {
    'unit_id': 'axe_0034_raid_revival',
    'name_jp': '黒竜雷斧',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0034_raid_revival.png',
    'rarity': 4
  },
  {
    'unit_id': 'bow_0012',
    'name_jp': '玄虎の弓',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0012.png',
    'rarity': 4
  },
  {
    'unit_id': 'fist_0004',
    'name_jp': '赤鬼の篭手',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0004.png',
    'rarity': 4
  },
  {
    'unit_id': 'shield_0019',
    'name_jp': '四つ巴の盾',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0019.png',
    'rarity': 4
  },
  {
    'unit_id': 'shield_0024_raid',
    'name_jp': 'ザリーズン',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0024_raid.png',
    'rarity': 4
  },
  {
    'unit_id': 'spear_0019',
    'name_jp': '黒竜雷槍',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0019.png',
    'rarity': 4
  },
  {
    'unit_id': 'staff_0011',
    'name_jp': '百妖の華杖',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0011.png',
    'rarity': 4
  },
  {
    'unit_id': 'book_0021_storyevent',
    'name_jp': '百物語',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0021_storyevent.png',
    'rarity': 4
  },
  {
    'unit_id': 'bow_0008',
    'name_jp': '梓弓',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0008.png',
    'rarity': 4
  },
  {
    'unit_id': 'bow_0023_coop',
    'name_jp': '祈願の弓',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0023_coop.png',
    'rarity': 4
  },
  {
    'unit_id': 'bow_0024_raid',
    'name_jp': '殲風竜弓',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0024_raid.png',
    'rarity': 4
  },
  {
    'unit_id': 'bow_0034_raid',
    'name_jp': 'トーチパシング',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0034_raid.png',
    'rarity': 4
  },
  {
    'unit_id': 'fist_0012',
    'name_jp': '獣王牙拳',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0012.png',
    'rarity': 4
  },
  {
    'unit_id': 'fist_0031_storyevent',
    'name_jp': 'フェイククロー',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0031_storyevent.png',
    'rarity': 4
  },
  {
    'unit_id': 'gun_0008_raid',
    'name_jp': 'オーロラライフル',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0008_raid.png',
    'rarity': 4
  },
  {
    'unit_id': 'spear_0024',
    'name_jp': '風車',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0024.png',
    'rarity': 4
  },
  {
    'unit_id': 'staff_0031_raid_revival',
    'name_jp': '殲風竜杖',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0031_raid_revival.png',
    'rarity': 4
  },
  {
    'unit_id': 'sword_0014',
    'name_jp': '木霊の大剣',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0014.png',
    'rarity': 4
  },
  {
    'unit_id': 'sword_0015',
    'name_jp': '禍根の剣',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0015.png',
    'rarity': 4
  },
  {
    'unit_id': 'acce_0012_storyevent',
    'name_jp': 'セレモニーメダリオン',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0012_storyevent.png',
    'rarity': 4
  },
  {
    'unit_id': 'acce_0033_boss_unique',
    'name_jp': '怨嗟の転飾',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0033_boss_unique.png',
    'rarity': 4
  },
  {
    'unit_id': 'acce_0037_raid',
    'name_jp': 'ルナウーム',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0037_raid.png',
    'rarity': 4
  },
  {
    'unit_id': 'axe_0019_coop',
    'name_jp': '名匠の槌',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0019_coop.png',
    'rarity': 4
  },
  {
    'unit_id': 'book_0023_raid',
    'name_jp': 'ハロウィンジャーナル',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0023_raid.png',
    'rarity': 4
  },
  {
    'unit_id': 'book_0031_raid_revival',
    'name_jp': '光芒竜典',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0031_raid_revival.png',
    'rarity': 4
  },
  {
    'unit_id': 'shield_0016_raid',
    'name_jp': '光芒竜盾',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0016_raid.png',
    'rarity': 4
  },
  {
    'unit_id': 'shield_0021',
    'name_jp': 'ノイズスクラッチ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0021.png',
    'rarity': 4
  },
  {
    'unit_id': 'spear_0014',
    'name_jp': 'デストロイヤー',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0014.png',
    'rarity': 4
  },
  {
    'unit_id': 'staff_0032',
    'name_jp': '啓明の杖',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0032.png',
    'rarity': 4
  },
  {
    'unit_id': 'sword_0010',
    'name_jp': 'イルウーン',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0010.png',
    'rarity': 4
  },
  {
    'unit_id': 'sword_0018',
    'name_jp': 'コンヴィクション',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0018.png',
    'rarity': 4
  },
  {
    'unit_id': 'sword_0071_storyevent',
    'name_jp': 'イノセンス',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0071_storyevent.png',
    'rarity': 4
  },
  {
    'unit_id': 'sword_rare4_phl_blade',
    'name_jp': 'ＰＨＬブレード',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_rare4_phl_blade.png',
    'rarity': 4
  },
  {
    'unit_id': 'axe_0014',
    'name_jp': '狐影の斧',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0014.png',
    'rarity': 4
  },
  {
    'unit_id': 'axe_0016',
    'name_jp': 'カースアックス',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0016.png',
    'rarity': 4
  },
  {
    'unit_id': 'book_0007',
    'name_jp': 'ニーベルンゲン',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0007.png',
    'rarity': 4
  },
  {
    'unit_id': 'fist_0041_raid',
    'name_jp': 'ジョニーリンゴ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0041_raid.png',
    'rarity': 4
  },
  {
    'unit_id': 'gun_0014_story_event',
    'name_jp': 'SG21',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0014_story_event.png',
    'rarity': 4
  },
  {
    'unit_id': 'shield_0027',
    'name_jp': 'ストライクブンカー',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0027.png',
    'rarity': 4
  },
  {
    'unit_id': 'staff_0022',
    'name_jp': '血脈の杖',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0022.png',
    'rarity': 4
  },
  {
    'unit_id': 'staff_0023_raid',
    'name_jp': '凶闇竜杖',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0023_raid.png',
    'rarity': 4
  },
  {
    'unit_id': 'sword_0003',
    'name_jp': '妖刀蛇崩',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0003.png',
    'rarity': 4
  },
  {
    'unit_id': 'sword_0052_raid_revival',
    'name_jp': '凶闇竜刃',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0052_raid_revival.png',
    'rarity': 4
  },
  {
    'unit_id': 'axe_0007',
    'name_jp': 'トマホーク',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0007.png',
    'rarity': 4
  },
  {
    'unit_id': 'book_0004',
    'name_jp': '戦国策写本',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0004.png',
    'rarity': 4
  },
  {
    'unit_id': 'bow_0007',
    'name_jp': 'コンパウンドボウ',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0007.png',
    'rarity': 4
  },
  {
    'unit_id': 'fist_0007',
    'name_jp': 'パワードアーム',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0007.png',
    'rarity': 4
  },
  {
    'unit_id': 'shield_0015',
    'name_jp': 'リンドヴルム',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0015.png',
    'rarity': 4
  },
  {
    'unit_id': 'spear_0004',
    'name_jp': 'ツイストランス',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0004.png',
    'rarity': 4
  },
  {
    'unit_id': 'spear_0008',
    'name_jp': 'パルチザン',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0008.png',
    'rarity': 4
  },
  {
    'unit_id': 'spear_0009',
    'name_jp': '珊瑚の槍',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0009.png',
    'rarity': 4
  },
  {
    'unit_id': 'staff_0005',
    'name_jp': 'ホーリーロッド',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0005.png',
    'rarity': 4
  },
  {
    'unit_id': 'fist_0006',
    'name_jp': 'ムーンパタ',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0006.png',
    'rarity': 3
  },
  {
    'unit_id': 'spear_0007',
    'name_jp': 'パイク',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0007.png',
    'rarity': 3
  },
  {
    'unit_id': 'sword_0035',
    'name_jp': 'ヒートブレード',
    'attribute_desc': 'Fire',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0035.png',
    'rarity': 3
  },
  {
    'unit_id': 'acce_0036',
    'name_jp': 'ブラウレーゲン',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/acce_0036.png',
    'rarity': 3
  },
  {
    'unit_id': 'gun_0007',
    'name_jp': 'イリスブラスター',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/gun_0007.png',
    'rarity': 3
  },
  {
    'unit_id': 'staff_0003',
    'name_jp': '司祭の杖',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0003.png',
    'rarity': 3
  },
  {
    'unit_id': 'sword_0007',
    'name_jp': 'カトラス',
    'attribute_desc': 'Water',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0007.png',
    'rarity': 3
  },
  {
    'unit_id': 'axe_0006',
    'name_jp': 'ウォーサイズ',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0006.png',
    'rarity': 3
  },
  {
    'unit_id': 'book_0010',
    'name_jp': 'ピレボス',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0010.png',
    'rarity': 3
  },
  {
    'unit_id': 'sword_0027',
    'name_jp': 'エレキダガー',
    'attribute_desc': 'Thunder',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0027.png',
    'rarity': 3
  },
  {
    'unit_id': 'bow_0003',
    'name_jp': 'ロングボウ',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0003.png',
    'rarity': 3
  },
  {
    'unit_id': 'shield_0009',
    'name_jp': 'ナイトシールド',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0009.png',
    'rarity': 3
  },
  {
    'unit_id': 'shield_0017',
    'name_jp': 'エアリアクター',
    'attribute_desc': 'Wind',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0017.png',
    'rarity': 3
  },
  {
    'unit_id': 'bow_0032',
    'name_jp': 'リトパルト',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0032.png',
    'rarity': 3
  },
  {
    'unit_id': 'spear_0013',
    'name_jp': '偃月刀',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0013.png',
    'rarity': 3
  },
  {
    'unit_id': 'spear_0027',
    'name_jp': 'レイザーピルム',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0027.png',
    'rarity': 3
  },
  {
    'unit_id': 'sword_0013',
    'name_jp': 'フランベルジュ',
    'attribute_desc': 'Light',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0013.png',
    'rarity': 3
  },
  {
    'unit_id': 'axe_0011',
    'name_jp': 'バイキングアクス',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0011.png',
    'rarity': 3
  },
  {
    'unit_id': 'book_0002',
    'name_jp': 'レヒニッツ写本',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0002.png',
    'rarity': 3
  },
  {
    'unit_id': 'fist_0022',
    'name_jp': 'カオスナックル',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0022.png',
    'rarity': 3
  },
  {
    'unit_id': 'sword_0053',
    'name_jp': 'キャンプナイフ',
    'attribute_desc': 'Dark',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0053.png',
    'rarity': 3
  },
  {
    'unit_id': 'axe_0003',
    'name_jp': '戦士の斧',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0003.png',
    'rarity': 3
  },
  {
    'unit_id': 'axe_0012',
    'name_jp': '牛斧',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0012.png',
    'rarity': 3
  },
  {
    'unit_id': 'book_0005',
    'name_jp': '嘘の書',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0005.png',
    'rarity': 3
  },
  {
    'unit_id': 'bow_0006',
    'name_jp': 'クロスボウ',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0006.png',
    'rarity': 3
  },
  {
    'unit_id': 'fist_0010',
    'name_jp': 'ドラググラブ',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0010.png',
    'rarity': 3
  },
  {
    'unit_id': 'fist_0018',
    'name_jp': 'ブラスナックル',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0018.png',
    'rarity': 3
  },
  {
    'unit_id': 'shield_0002',
    'name_jp': '戦士の盾',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0002.png',
    'rarity': 3
  },
  {
    'unit_id': 'shield_0008',
    'name_jp': 'ラピスバックラー',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0008.png',
    'rarity': 3
  },
  {
    'unit_id': 'spear_0006',
    'name_jp': '流転の槍',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0006.png',
    'rarity': 3
  },
  {
    'unit_id': 'spear_0012',
    'name_jp': 'クーゼ',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0012.png',
    'rarity': 3
  },
  {
    'unit_id': 'staff_0002',
    'name_jp': '流転の杖',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0002.png',
    'rarity': 3
  },
  {
    'unit_id': 'staff_0007',
    'name_jp': 'マジックケーン',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0007.png',
    'rarity': 3
  },
  {
    'unit_id': 'staff_0010',
    'name_jp': '戦士の棍棒',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0010.png',
    'rarity': 3
  },
  {
    'unit_id': 'sword_0006',
    'name_jp': '流転の剣',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0006.png',
    'rarity': 3
  },
  {
    'unit_id': 'sword_0008',
    'name_jp': 'グラスブレード',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0008.png',
    'rarity': 3
  },
  {
    'unit_id': 'sword_0023_april',
    'name_jp': '幻想のにんじん剣',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0023_april.png',
    'rarity': 3
  },
  {
    'unit_id': 'axe_0001',
    'name_jp': '無銘の斧',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/axe_0001.png',
    'rarity': 2
  },
  {
    'unit_id': 'book_0001',
    'name_jp': '無銘の古書',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/book_0001.png',
    'rarity': 2
  },
  {
    'unit_id': 'bow_0001',
    'name_jp': '無銘の弓',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/bow_0001.png',
    'rarity': 2
  },
  {
    'unit_id': 'fist_0001',
    'name_jp': '無銘の拳具',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/fist_0001.png',
    'rarity': 2
  },
  {
    'unit_id': 'spear_0001',
    'name_jp': '無銘の槍',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/spear_0001.png',
    'rarity': 2
  },
  {
    'unit_id': 'sword_0002',
    'name_jp': '無銘の長剣',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0002.png',
    'rarity': 2
  },
  {
    'unit_id': 'shield_0001',
    'name_jp': '古びた盾',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/shield_0001.png',
    'rarity': 1
  },
  {
    'unit_id': 'staff_0001',
    'name_jp': '古びた杖',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/staff_0001.png',
    'rarity': 1
  },
  {
    'unit_id': 'sword_0001',
    'name_jp': '古びた短剣',
    'attribute_desc': 'All',
    'img_src': '/wf_party_archives/static/root/img/item/equips/sword_0001.png',
    'rarity': 1
  }
];
const enemies = {
    '233': {
      'desc_jp': '星喰いデオフラスス【クグイ】',
      'short_desc_jp': 'デオフラ(クグイ)',
      'group_desc_jp': 'クグイとリョウキの特別訓練',
      'difficulties': [
          {
            'quest_id': '917',
            'pk': '60',
            'desc_jp': 'マルチ 地獄級',
            'short_desc_jp': 'マルチ地獄級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '918',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '919',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '920',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '921',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '922',
            'pk': '61',
            'desc_jp': 'シングル 地獄級',
            'short_desc_jp': 'シングル地獄級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '923',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '924',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '925',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '926',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '229': {
      'desc_jp': '直接攻撃演武（耐久）',
      'short_desc_jp': '直攻演武',
      'group_desc_jp': '無限演武',
      'difficulties': [
          {
            'quest_id': '905',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '230': {
      'desc_jp': 'スキル演武',
      'short_desc_jp': 'スキル演武',
      'group_desc_jp': '無限演武',
      'difficulties': [
          {
            'quest_id': '906',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '231': {
      'desc_jp': 'パワフリ演武',
      'short_desc_jp': 'パワフリ演武',
      'group_desc_jp': '無限演武',
      'difficulties': [
          {
            'quest_id': '907',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '109': {
      'desc_jp': 'エギルエンヴィー',
      'short_desc_jp': 'エンヴィー',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '582',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '583',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '584',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '585',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '586',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '587',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '588',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '589',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '77': {
      'desc_jp': 'グリズリー',
      'short_desc_jp': '熊',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '435',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '436',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '437',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '438',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '439',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '440',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '441',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '442',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '68': {
      'desc_jp': 'ドーサルブラザーズ',
      'short_desc_jp': '鮫兄弟',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '395',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '396',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '397',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '398',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '399',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '400',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '401',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '402',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '1': {
      'desc_jp': 'オロチ',
      'short_desc_jp': '大蛇',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '13',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '14',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '15',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '16',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '17',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '18',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '2': {
      'desc_jp': '妖狐',
      'short_desc_jp': '狐',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '19',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '38',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '57',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '76',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '95',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '114',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '133',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '152',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '3': {
      'desc_jp': 'アドミニスター',
      'short_desc_jp': 'アドミ',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '1',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '7',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '20',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '39',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '58',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '77',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '96',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '115',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '134',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '153',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '4': {
      'desc_jp': 'Sec-5200Li',
      'short_desc_jp': '5200',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '21',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '40',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '59',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '78',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '97',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '116',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '135',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '154',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '5': {
      'desc_jp': '白虎',
      'short_desc_jp': '虎',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '2',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '8',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '22',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '41',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '60',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '79',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '98',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '117',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '136',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '155',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '6': {
      'desc_jp': '風将ファングライダー',
      'short_desc_jp': '猪',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '23',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '42',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '61',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '80',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '99',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '118',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '137',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '156',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '7': {
      'desc_jp': 'カースアークエギル',
      'short_desc_jp': 'エギ',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '3',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '9',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '24',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '43',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '62',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '81',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '100',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '119',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '138',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '157',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '8': {
      'desc_jp': 'ヤドリオー',
      'short_desc_jp': 'ヤド',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '4',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '10',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '25',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '44',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '63',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '82',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '101',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '120',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '139',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '158',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '9': {
      'desc_jp': 'タイダルクラーケン',
      'short_desc_jp': '烏賊',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '26',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '45',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '64',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '83',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '102',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '121',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '140',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '159',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '10': {
      'desc_jp': 'ルインゴーレム',
      'short_desc_jp': 'ゴレ',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '5',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '11',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '27',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '46',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '65',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '84',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '103',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '122',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '141',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '160',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '11': {
      'desc_jp': 'ファ・ルインガード',
      'short_desc_jp': 'ルイガ',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '28',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '47',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '66',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '85',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '104',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '123',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '142',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '161',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '12': {
      'desc_jp': '不死王レシタール',
      'short_desc_jp': 'レシ',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '6',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '12',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '29',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '48',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '67',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '86',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '105',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '124',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '143',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '162',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '13': {
      'desc_jp': 'ボルトホロウ',
      'short_desc_jp': '木',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '30',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '49',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '68',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '87',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '106',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '125',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '144',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '163',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '14': {
      'desc_jp': 'ヴィエ・ソラス',
      'short_desc_jp': '梟',
      'group_desc_jp': '恒常ボス',
      'difficulties': [
          {
            'quest_id': '171',
            'pk': '25',
            'desc_jp': 'マルチ 初級',
            'short_desc_jp': 'マルチ初級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '172',
            'pk': '30',
            'desc_jp': 'シングル 初級',
            'short_desc_jp': 'シングル初級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '15': {
      'desc_jp': '灼炎の廃竜 イルサバティカ',
      'short_desc_jp': '火廃竜',
      'group_desc_jp': '廃竜',
      'difficulties': [
          {
            'quest_id': '31',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '50',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '69',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '88',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '107',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '126',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '145',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '164',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '16': {
      'desc_jp': '水蝕の廃竜 イルラウドレス',
      'short_desc_jp': '水廃竜',
      'group_desc_jp': '廃竜',
      'difficulties': [
          {
            'quest_id': '32',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '51',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '70',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '89',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '108',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '127',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '146',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '165',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '17': {
      'desc_jp': '黒雷の廃竜 イルコオプス',
      'short_desc_jp': '雷廃竜',
      'group_desc_jp': '廃竜',
      'difficulties': [
          {
            'quest_id': '33',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '52',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '71',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '90',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '109',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '128',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '147',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '166',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '18': {
      'desc_jp': '殲風の廃竜 イルグラウル',
      'short_desc_jp': '風廃竜',
      'group_desc_jp': '廃竜',
      'difficulties': [
          {
            'quest_id': '34',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '53',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '72',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '91',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '110',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '129',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '148',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '167',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '19': {
      'desc_jp': '光芒の廃竜 イルメタレイ',
      'short_desc_jp': '光廃竜',
      'group_desc_jp': '廃竜',
      'difficulties': [
          {
            'quest_id': '35',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '54',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '73',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '92',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '111',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '130',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '149',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '168',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '20': {
      'desc_jp': '凶闇の廃竜 イルアンスラ',
      'short_desc_jp': '闇廃竜',
      'group_desc_jp': '廃竜',
      'difficulties': [
          {
            'quest_id': '36',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '55',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '74',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '93',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '112',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '131',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '150',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '169',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '22': {
      'desc_jp': 'ゆらぎの迷宮 幽玄域 火',
      'short_desc_jp': '幽玄火',
      'group_desc_jp': 'ゆらぎ幽玄域',
      'difficulties': [
          {
            'quest_id': '173',
            'pk': '3',
            'desc_jp': '【28～30階層】',
            'short_desc_jp': '28階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '179',
            'pk': '4',
            'desc_jp': '【25～27階層】',
            'short_desc_jp': '25階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '185',
            'pk': '5',
            'desc_jp': '【22～24階層】',
            'short_desc_jp': '22階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '191',
            'pk': '6',
            'desc_jp': '【19～21階層】',
            'short_desc_jp': '19階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '197',
            'pk': '7',
            'desc_jp': '【16～18階層】',
            'short_desc_jp': '16階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '203',
            'pk': '8',
            'desc_jp': '【13～15階層】',
            'short_desc_jp': '13階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '209',
            'pk': '9',
            'desc_jp': '【10～12階層】',
            'short_desc_jp': '10階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '215',
            'pk': '10',
            'desc_jp': '【7～9階層】',
            'short_desc_jp': '7階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '221',
            'pk': '11',
            'desc_jp': '【4～6階層】',
            'short_desc_jp': '4階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '227',
            'pk': '12',
            'desc_jp': '【1～3階層】',
            'short_desc_jp': '1階層～',
            'group_desc_jp': '幽玄域'
          },
    ]},
    '23': {
      'desc_jp': 'ゆらぎの迷宮 幽玄域 水',
      'short_desc_jp': '幽玄水',
      'group_desc_jp': 'ゆらぎ幽玄域',
      'difficulties': [
          {
            'quest_id': '174',
            'pk': '3',
            'desc_jp': '【28～30階層】',
            'short_desc_jp': '28階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '180',
            'pk': '4',
            'desc_jp': '【25～27階層】',
            'short_desc_jp': '25階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '186',
            'pk': '5',
            'desc_jp': '【22～24階層】',
            'short_desc_jp': '22階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '192',
            'pk': '6',
            'desc_jp': '【19～21階層】',
            'short_desc_jp': '19階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '198',
            'pk': '7',
            'desc_jp': '【16～18階層】',
            'short_desc_jp': '16階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '204',
            'pk': '8',
            'desc_jp': '【13～15階層】',
            'short_desc_jp': '13階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '210',
            'pk': '9',
            'desc_jp': '【10～12階層】',
            'short_desc_jp': '10階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '216',
            'pk': '10',
            'desc_jp': '【7～9階層】',
            'short_desc_jp': '7階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '222',
            'pk': '11',
            'desc_jp': '【4～6階層】',
            'short_desc_jp': '4階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '228',
            'pk': '12',
            'desc_jp': '【1～3階層】',
            'short_desc_jp': '1階層～',
            'group_desc_jp': '幽玄域'
          },
    ]},
    '24': {
      'desc_jp': 'ゆらぎの迷宮 幽玄域 雷',
      'short_desc_jp': '幽玄雷',
      'group_desc_jp': 'ゆらぎ幽玄域',
      'difficulties': [
          {
            'quest_id': '175',
            'pk': '3',
            'desc_jp': '【28～30階層】',
            'short_desc_jp': '28階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '181',
            'pk': '4',
            'desc_jp': '【25～27階層】',
            'short_desc_jp': '25階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '187',
            'pk': '5',
            'desc_jp': '【22～24階層】',
            'short_desc_jp': '22階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '193',
            'pk': '6',
            'desc_jp': '【19～21階層】',
            'short_desc_jp': '19階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '199',
            'pk': '7',
            'desc_jp': '【16～18階層】',
            'short_desc_jp': '16階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '205',
            'pk': '8',
            'desc_jp': '【13～15階層】',
            'short_desc_jp': '13階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '211',
            'pk': '9',
            'desc_jp': '【10～12階層】',
            'short_desc_jp': '10階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '217',
            'pk': '10',
            'desc_jp': '【7～9階層】',
            'short_desc_jp': '7階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '223',
            'pk': '11',
            'desc_jp': '【4～6階層】',
            'short_desc_jp': '4階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '229',
            'pk': '12',
            'desc_jp': '【1～3階層】',
            'short_desc_jp': '1階層～',
            'group_desc_jp': '幽玄域'
          },
    ]},
    '25': {
      'desc_jp': 'ゆらぎの迷宮 幽玄域 風',
      'short_desc_jp': '幽玄風',
      'group_desc_jp': 'ゆらぎ幽玄域',
      'difficulties': [
          {
            'quest_id': '176',
            'pk': '3',
            'desc_jp': '【28～30階層】',
            'short_desc_jp': '28階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '182',
            'pk': '4',
            'desc_jp': '【25～27階層】',
            'short_desc_jp': '25階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '188',
            'pk': '5',
            'desc_jp': '【22～24階層】',
            'short_desc_jp': '22階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '194',
            'pk': '6',
            'desc_jp': '【19～21階層】',
            'short_desc_jp': '19階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '200',
            'pk': '7',
            'desc_jp': '【16～18階層】',
            'short_desc_jp': '16階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '206',
            'pk': '8',
            'desc_jp': '【13～15階層】',
            'short_desc_jp': '13階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '212',
            'pk': '9',
            'desc_jp': '【10～12階層】',
            'short_desc_jp': '10階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '218',
            'pk': '10',
            'desc_jp': '【7～9階層】',
            'short_desc_jp': '7階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '224',
            'pk': '11',
            'desc_jp': '【4～6階層】',
            'short_desc_jp': '4階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '230',
            'pk': '12',
            'desc_jp': '【1～3階層】',
            'short_desc_jp': '1階層～',
            'group_desc_jp': '幽玄域'
          },
    ]},
    '26': {
      'desc_jp': 'ゆらぎの迷宮 幽玄域 光',
      'short_desc_jp': '幽玄光',
      'group_desc_jp': 'ゆらぎ幽玄域',
      'difficulties': [
          {
            'quest_id': '177',
            'pk': '3',
            'desc_jp': '【28～30階層】',
            'short_desc_jp': '28階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '183',
            'pk': '4',
            'desc_jp': '【25～27階層】',
            'short_desc_jp': '25階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '189',
            'pk': '5',
            'desc_jp': '【22～24階層】',
            'short_desc_jp': '22階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '195',
            'pk': '6',
            'desc_jp': '【19～21階層】',
            'short_desc_jp': '19階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '201',
            'pk': '7',
            'desc_jp': '【16～18階層】',
            'short_desc_jp': '16階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '207',
            'pk': '8',
            'desc_jp': '【13～15階層】',
            'short_desc_jp': '13階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '213',
            'pk': '9',
            'desc_jp': '【10～12階層】',
            'short_desc_jp': '10階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '219',
            'pk': '10',
            'desc_jp': '【7～9階層】',
            'short_desc_jp': '7階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '225',
            'pk': '11',
            'desc_jp': '【4～6階層】',
            'short_desc_jp': '4階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '231',
            'pk': '12',
            'desc_jp': '【1～3階層】',
            'short_desc_jp': '1階層～',
            'group_desc_jp': '幽玄域'
          },
    ]},
    '27': {
      'desc_jp': 'ゆらぎの迷宮 幽玄域 闇',
      'short_desc_jp': '幽玄闇',
      'group_desc_jp': 'ゆらぎ幽玄域',
      'difficulties': [
          {
            'quest_id': '178',
            'pk': '3',
            'desc_jp': '【28～30階層】',
            'short_desc_jp': '28階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '184',
            'pk': '4',
            'desc_jp': '【25～27階層】',
            'short_desc_jp': '25階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '190',
            'pk': '5',
            'desc_jp': '【22～24階層】',
            'short_desc_jp': '22階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '196',
            'pk': '6',
            'desc_jp': '【19～21階層】',
            'short_desc_jp': '19階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '202',
            'pk': '7',
            'desc_jp': '【16～18階層】',
            'short_desc_jp': '16階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '208',
            'pk': '8',
            'desc_jp': '【13～15階層】',
            'short_desc_jp': '13階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '214',
            'pk': '9',
            'desc_jp': '【10～12階層】',
            'short_desc_jp': '10階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '220',
            'pk': '10',
            'desc_jp': '【7～9階層】',
            'short_desc_jp': '7階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '226',
            'pk': '11',
            'desc_jp': '【4～6階層】',
            'short_desc_jp': '4階層～',
            'group_desc_jp': '幽玄域'
          },
          {
            'quest_id': '232',
            'pk': '12',
            'desc_jp': '【1～3階層】',
            'short_desc_jp': '1階層～',
            'group_desc_jp': '幽玄域'
          },
    ]},
    '28': {
      'desc_jp': 'ゆらぎの迷宮 崩壊域 アビスの獣',
      'short_desc_jp': 'アビ獣',
      'group_desc_jp': 'ゆらぎ崩壊域',
      'difficulties': [
          {
            'quest_id': '233',
            'pk': '38',
            'desc_jp': '極',
            'short_desc_jp': '極',
            'group_desc_jp': 'アビ獣'
          },
          {
            'quest_id': '240',
            'pk': '39',
            'desc_jp': '真',
            'short_desc_jp': '真',
            'group_desc_jp': 'アビ獣'
          },
          {
            'quest_id': '247',
            'pk': '40',
            'desc_jp': '無印',
            'short_desc_jp': '無印',
            'group_desc_jp': 'アビ獣'
          },
    ]},
    '29': {
      'desc_jp': 'ゆらぎの迷宮 崩壊域 火',
      'short_desc_jp': '崩壊火',
      'group_desc_jp': 'ゆらぎ崩壊域',
      'difficulties': [
          {
            'quest_id': '234',
            'pk': '13',
            'desc_jp': 'Lv70',
            'short_desc_jp': 'Lv70',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '241',
            'pk': '14',
            'desc_jp': 'Lv60',
            'short_desc_jp': 'Lv60',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '248',
            'pk': '15',
            'desc_jp': 'Lv50',
            'short_desc_jp': 'Lv50',
            'group_desc_jp': 'ゆらぎ'
          },
    ]},
    '30': {
      'desc_jp': 'ゆらぎの迷宮 崩壊域 水',
      'short_desc_jp': '崩壊水',
      'group_desc_jp': 'ゆらぎ崩壊域',
      'difficulties': [
          {
            'quest_id': '235',
            'pk': '13',
            'desc_jp': 'Lv70',
            'short_desc_jp': 'Lv70',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '242',
            'pk': '14',
            'desc_jp': 'Lv60',
            'short_desc_jp': 'Lv60',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '249',
            'pk': '15',
            'desc_jp': 'Lv50',
            'short_desc_jp': 'Lv50',
            'group_desc_jp': 'ゆらぎ'
          },
    ]},
    '31': {
      'desc_jp': 'ゆらぎの迷宮 崩壊域 雷',
      'short_desc_jp': '崩壊雷',
      'group_desc_jp': 'ゆらぎ崩壊域',
      'difficulties': [
          {
            'quest_id': '236',
            'pk': '13',
            'desc_jp': 'Lv70',
            'short_desc_jp': 'Lv70',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '243',
            'pk': '14',
            'desc_jp': 'Lv60',
            'short_desc_jp': 'Lv60',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '250',
            'pk': '15',
            'desc_jp': 'Lv50',
            'short_desc_jp': 'Lv50',
            'group_desc_jp': 'ゆらぎ'
          },
    ]},
    '32': {
      'desc_jp': 'ゆらぎの迷宮 崩壊域 風',
      'short_desc_jp': '崩壊風',
      'group_desc_jp': 'ゆらぎ崩壊域',
      'difficulties': [
          {
            'quest_id': '237',
            'pk': '13',
            'desc_jp': 'Lv70',
            'short_desc_jp': 'Lv70',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '244',
            'pk': '14',
            'desc_jp': 'Lv60',
            'short_desc_jp': 'Lv60',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '251',
            'pk': '15',
            'desc_jp': 'Lv50',
            'short_desc_jp': 'Lv50',
            'group_desc_jp': 'ゆらぎ'
          },
    ]},
    '33': {
      'desc_jp': 'ゆらぎの迷宮 崩壊域 光',
      'short_desc_jp': '崩壊光',
      'group_desc_jp': 'ゆらぎ崩壊域',
      'difficulties': [
          {
            'quest_id': '238',
            'pk': '13',
            'desc_jp': 'Lv70',
            'short_desc_jp': 'Lv70',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '245',
            'pk': '14',
            'desc_jp': 'Lv60',
            'short_desc_jp': 'Lv60',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '252',
            'pk': '15',
            'desc_jp': 'Lv50',
            'short_desc_jp': 'Lv50',
            'group_desc_jp': 'ゆらぎ'
          },
    ]},
    '34': {
      'desc_jp': 'ゆらぎの迷宮 崩壊域 闇',
      'short_desc_jp': '崩壊闇',
      'group_desc_jp': 'ゆらぎ崩壊域',
      'difficulties': [
          {
            'quest_id': '239',
            'pk': '13',
            'desc_jp': 'Lv70',
            'short_desc_jp': 'Lv70',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '246',
            'pk': '14',
            'desc_jp': 'Lv60',
            'short_desc_jp': 'Lv60',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '253',
            'pk': '15',
            'desc_jp': 'Lv50',
            'short_desc_jp': 'Lv50',
            'group_desc_jp': 'ゆらぎ'
          },
    ]},
    '35': {
      'desc_jp': 'ゆらぎの迷宮 崩壊域 深層に至る扉',
      'short_desc_jp': '崩壊扉',
      'group_desc_jp': 'ゆらぎ崩壊域',
      'difficulties': [
          {
            'quest_id': '306',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '81': {
      'desc_jp': 'ゆらぎの迷宮 宝物域 火',
      'short_desc_jp': '宝物火',
      'group_desc_jp': 'ゆらぎ宝物域',
      'difficulties': [
          {
            'quest_id': '457',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '82': {
      'desc_jp': 'ゆらぎの迷宮 宝物域 水',
      'short_desc_jp': '宝物水',
      'group_desc_jp': 'ゆらぎ宝物域',
      'difficulties': [
          {
            'quest_id': '458',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '83': {
      'desc_jp': 'ゆらぎの迷宮 宝物域 雷',
      'short_desc_jp': '宝物雷',
      'group_desc_jp': 'ゆらぎ宝物域',
      'difficulties': [
          {
            'quest_id': '459',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '84': {
      'desc_jp': 'ゆらぎの迷宮 宝物域 風',
      'short_desc_jp': '宝物風',
      'group_desc_jp': 'ゆらぎ宝物域',
      'difficulties': [
          {
            'quest_id': '460',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '85': {
      'desc_jp': 'ゆらぎの迷宮 宝物域 光',
      'short_desc_jp': '宝物光',
      'group_desc_jp': 'ゆらぎ宝物域',
      'difficulties': [
          {
            'quest_id': '461',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '86': {
      'desc_jp': 'ゆらぎの迷宮 宝物域 闇',
      'short_desc_jp': '宝物闇',
      'group_desc_jp': 'ゆらぎ宝物域',
      'difficulties': [
          {
            'quest_id': '462',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '36': {
      'desc_jp': 'ゆらぎの迷宮 火',
      'short_desc_jp': 'ゆらぎ火',
      'group_desc_jp': 'ゆらぎの迷宮',
      'difficulties': [
          {
            'quest_id': '254',
            'pk': '14',
            'desc_jp': 'Lv60',
            'short_desc_jp': 'Lv60',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '261',
            'pk': '15',
            'desc_jp': 'Lv50',
            'short_desc_jp': 'Lv50',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '268',
            'pk': '16',
            'desc_jp': 'Lv40',
            'short_desc_jp': 'Lv40',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '275',
            'pk': '17',
            'desc_jp': 'Lv30',
            'short_desc_jp': 'Lv30',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '282',
            'pk': '18',
            'desc_jp': 'Lv20',
            'short_desc_jp': 'Lv20',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '289',
            'pk': '19',
            'desc_jp': 'Lv10',
            'short_desc_jp': 'Lv10',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '695',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '694',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '693',
            'pk': '30',
            'desc_jp': 'シングル 初級',
            'short_desc_jp': 'シングル初級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '37': {
      'desc_jp': 'ゆらぎの迷宮 水',
      'short_desc_jp': 'ゆらぎ水',
      'group_desc_jp': 'ゆらぎの迷宮',
      'difficulties': [
          {
            'quest_id': '255',
            'pk': '14',
            'desc_jp': 'Lv60',
            'short_desc_jp': 'Lv60',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '262',
            'pk': '15',
            'desc_jp': 'Lv50',
            'short_desc_jp': 'Lv50',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '269',
            'pk': '16',
            'desc_jp': 'Lv40',
            'short_desc_jp': 'Lv40',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '276',
            'pk': '17',
            'desc_jp': 'Lv30',
            'short_desc_jp': 'Lv30',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '283',
            'pk': '18',
            'desc_jp': 'Lv20',
            'short_desc_jp': 'Lv20',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '290',
            'pk': '19',
            'desc_jp': 'Lv10',
            'short_desc_jp': 'Lv10',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '698',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '697',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '696',
            'pk': '30',
            'desc_jp': 'シングル 初級',
            'short_desc_jp': 'シングル初級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '38': {
      'desc_jp': 'ゆらぎの迷宮 雷',
      'short_desc_jp': 'ゆらぎ雷',
      'group_desc_jp': 'ゆらぎの迷宮',
      'difficulties': [
          {
            'quest_id': '256',
            'pk': '14',
            'desc_jp': 'Lv60',
            'short_desc_jp': 'Lv60',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '263',
            'pk': '15',
            'desc_jp': 'Lv50',
            'short_desc_jp': 'Lv50',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '270',
            'pk': '16',
            'desc_jp': 'Lv40',
            'short_desc_jp': 'Lv40',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '277',
            'pk': '17',
            'desc_jp': 'Lv30',
            'short_desc_jp': 'Lv30',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '284',
            'pk': '18',
            'desc_jp': 'Lv20',
            'short_desc_jp': 'Lv20',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '291',
            'pk': '19',
            'desc_jp': 'Lv10',
            'short_desc_jp': 'Lv10',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '701',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '700',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '699',
            'pk': '30',
            'desc_jp': 'シングル 初級',
            'short_desc_jp': 'シングル初級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '39': {
      'desc_jp': 'ゆらぎの迷宮 風',
      'short_desc_jp': 'ゆらぎ風',
      'group_desc_jp': 'ゆらぎの迷宮',
      'difficulties': [
          {
            'quest_id': '257',
            'pk': '14',
            'desc_jp': 'Lv60',
            'short_desc_jp': 'Lv60',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '264',
            'pk': '15',
            'desc_jp': 'Lv50',
            'short_desc_jp': 'Lv50',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '271',
            'pk': '16',
            'desc_jp': 'Lv40',
            'short_desc_jp': 'Lv40',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '278',
            'pk': '17',
            'desc_jp': 'Lv30',
            'short_desc_jp': 'Lv30',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '285',
            'pk': '18',
            'desc_jp': 'Lv20',
            'short_desc_jp': 'Lv20',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '292',
            'pk': '19',
            'desc_jp': 'Lv10',
            'short_desc_jp': 'Lv10',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '704',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '703',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '702',
            'pk': '30',
            'desc_jp': 'シングル 初級',
            'short_desc_jp': 'シングル初級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '40': {
      'desc_jp': 'ゆらぎの迷宮 光',
      'short_desc_jp': 'ゆらぎ光',
      'group_desc_jp': 'ゆらぎの迷宮',
      'difficulties': [
          {
            'quest_id': '258',
            'pk': '14',
            'desc_jp': 'Lv60',
            'short_desc_jp': 'Lv60',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '265',
            'pk': '15',
            'desc_jp': 'Lv50',
            'short_desc_jp': 'Lv50',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '272',
            'pk': '16',
            'desc_jp': 'Lv40',
            'short_desc_jp': 'Lv40',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '279',
            'pk': '17',
            'desc_jp': 'Lv30',
            'short_desc_jp': 'Lv30',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '286',
            'pk': '18',
            'desc_jp': 'Lv20',
            'short_desc_jp': 'Lv20',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '293',
            'pk': '19',
            'desc_jp': 'Lv10',
            'short_desc_jp': 'Lv10',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '707',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '706',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '705',
            'pk': '30',
            'desc_jp': 'シングル 初級',
            'short_desc_jp': 'シングル初級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '41': {
      'desc_jp': 'ゆらぎの迷宮 闇',
      'short_desc_jp': 'ゆらぎ闇',
      'group_desc_jp': 'ゆらぎの迷宮',
      'difficulties': [
          {
            'quest_id': '259',
            'pk': '14',
            'desc_jp': 'Lv60',
            'short_desc_jp': 'Lv60',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '266',
            'pk': '15',
            'desc_jp': 'Lv50',
            'short_desc_jp': 'Lv50',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '273',
            'pk': '16',
            'desc_jp': 'Lv40',
            'short_desc_jp': 'Lv40',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '280',
            'pk': '17',
            'desc_jp': 'Lv30',
            'short_desc_jp': 'Lv30',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '287',
            'pk': '18',
            'desc_jp': 'Lv20',
            'short_desc_jp': 'Lv20',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '294',
            'pk': '19',
            'desc_jp': 'Lv10',
            'short_desc_jp': 'Lv10',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '710',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '709',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '708',
            'pk': '30',
            'desc_jp': 'シングル 初級',
            'short_desc_jp': 'シングル初級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '42': {
      'desc_jp': 'ゆらぎの迷宮 経験値&amp;マナ',
      'short_desc_jp': 'マナ',
      'group_desc_jp': 'ゆらぎの迷宮',
      'difficulties': [
          {
            'quest_id': '260',
            'pk': '14',
            'desc_jp': 'Lv60',
            'short_desc_jp': 'Lv60',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '267',
            'pk': '15',
            'desc_jp': 'Lv50',
            'short_desc_jp': 'Lv50',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '274',
            'pk': '16',
            'desc_jp': 'Lv40',
            'short_desc_jp': 'Lv40',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '281',
            'pk': '17',
            'desc_jp': 'Lv30',
            'short_desc_jp': 'Lv30',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '288',
            'pk': '18',
            'desc_jp': 'Lv20',
            'short_desc_jp': 'Lv20',
            'group_desc_jp': 'ゆらぎ'
          },
          {
            'quest_id': '295',
            'pk': '19',
            'desc_jp': 'Lv10',
            'short_desc_jp': 'Lv10',
            'group_desc_jp': 'ゆらぎ'
          },
    ]},
    '43': {
      'desc_jp': '8章14-1 醜王オーグ',
      'short_desc_jp': '8章ボス',
      'group_desc_jp': 'ストーリー',
      'difficulties': [
          {
            'quest_id': '296',
            'pk': '31',
            'desc_jp': 'エクストラ',
            'short_desc_jp': 'EX',
            'group_desc_jp': 'ストーリー'
          },
          {
            'quest_id': '298',
            'pk': '32',
            'desc_jp': 'メイン',
            'short_desc_jp': 'メイン',
            'group_desc_jp': 'ストーリー'
          },
    ]},
    '44': {
      'desc_jp': '7章14-2 招かれざる客',
      'short_desc_jp': '7章ボス',
      'group_desc_jp': 'ストーリー',
      'difficulties': [
          {
            'quest_id': '297',
            'pk': '31',
            'desc_jp': 'エクストラ',
            'short_desc_jp': 'EX',
            'group_desc_jp': 'ストーリー'
          },
          {
            'quest_id': '299',
            'pk': '32',
            'desc_jp': 'メイン',
            'short_desc_jp': 'メイン',
            'group_desc_jp': 'ストーリー'
          },
    ]},
    '149': {
      'desc_jp': '時と火の試練',
      'short_desc_jp': '時火試練',
      'group_desc_jp': '極時の試練シリーズ',
      'difficulties': [
          {
            'quest_id': '649',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '148': {
      'desc_jp': '時と水の試練',
      'short_desc_jp': '時水試練',
      'group_desc_jp': '極時の試練シリーズ',
      'difficulties': [
          {
            'quest_id': '648',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '147': {
      'desc_jp': '時と雷の試練',
      'short_desc_jp': '時雷試練',
      'group_desc_jp': '極時の試練シリーズ',
      'difficulties': [
          {
            'quest_id': '647',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '150': {
      'desc_jp': '時と風の試練',
      'short_desc_jp': '時風試練',
      'group_desc_jp': '極時の試練シリーズ',
      'difficulties': [
          {
            'quest_id': '650',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '151': {
      'desc_jp': '時と光の試練',
      'short_desc_jp': '時光試練',
      'group_desc_jp': '極時の試練シリーズ',
      'difficulties': [
          {
            'quest_id': '651',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '152': {
      'desc_jp': '時と闇の試練',
      'short_desc_jp': '時闇試練',
      'group_desc_jp': '極時の試練シリーズ',
      'difficulties': [
          {
            'quest_id': '652',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '80': {
      'desc_jp': 'マザー・ラヴ',
      'short_desc_jp': 'ラヴ',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '451',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '452',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '79': {
      'desc_jp': 'コンダクター',
      'short_desc_jp': 'コンダク',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '453',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '454',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '52': {
      'desc_jp': 'ロストオブリビオン',
      'short_desc_jp': 'オブリビ',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '316',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '313',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '312',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '315',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '314',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '53': {
      'desc_jp': 'サージェントドール',
      'short_desc_jp': 'ドール',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '318',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '317',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '321',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '320',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '319',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '456',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '58': {
      'desc_jp': '超人ゼグラ',
      'short_desc_jp': '超人',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '338',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '342',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '341',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '340',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '339',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '57': {
      'desc_jp': 'ジーンドラゴン',
      'short_desc_jp': 'ジンドラ',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '334',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '335',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '333',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '336',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '337',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '455',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '69': {
      'desc_jp': '前鬼後鬼',
      'short_desc_jp': '前後鬼',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '405',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '403',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '404',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '406',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '407',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '70': {
      'desc_jp': '画竜',
      'short_desc_jp': '画竜',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '408',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '409',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '410',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '411',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '412',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '99': {
      'desc_jp': 'ブラックドラゴン',
      'short_desc_jp': '黒ドラ',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '531',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '529',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '533',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '532',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '530',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '100': {
      'desc_jp': 'プロキオ変異体',
      'short_desc_jp': 'プロキオ',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '524',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '527',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '525',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '528',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '526',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '66': {
      'desc_jp': '統括AI',
      'short_desc_jp': 'AI',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '382',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '383',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '384',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '385',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '386',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '65': {
      'desc_jp': '自動警装SecMk2',
      'short_desc_jp': 'SecMk2',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '380',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '381',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '377',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '378',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '379',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '76': {
      'desc_jp': '星喰いデオフラスス',
      'short_desc_jp': 'デオフラ',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '428',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '429',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '431',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '432',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '434',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '72': {
      'desc_jp': 'フェイクダーリンⅡ',
      'short_desc_jp': 'ダーリン',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '415',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '416',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '414',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '417',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '418',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '55': {
      'desc_jp': 'ステラバスター',
      'short_desc_jp': 'ステバス',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '331',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '327',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '328',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '329',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '330',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '54': {
      'desc_jp': 'ハーリダル',
      'short_desc_jp': 'ハリダル',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '323',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '324',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '322',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '325',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '326',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '182': {
      'desc_jp': 'ショコラバード',
      'short_desc_jp': 'チョコ鳥',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
    ]},
    '88': {
      'desc_jp': 'マグノス',
      'short_desc_jp': 'マグノス',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '471',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '472',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '473',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '474',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '475',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '102': {
      'desc_jp': 'ドラゴンイーター',
      'short_desc_jp': '龍喰い',
      'group_desc_jp': 'サイドストーリー',
      'difficulties': [
          {
            'quest_id': '550',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '548',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '546',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '549',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '547',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '175': {
      'desc_jp': '超人ゼグラ【追憶】',
      'short_desc_jp': '超人(追憶)',
      'group_desc_jp': '追憶の試練',
      'difficulties': [
          {
            'quest_id': '787',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
    ]},
    '176': {
      'desc_jp': 'ステラバスター【追憶】',
      'short_desc_jp': 'ステバス(追憶)',
      'group_desc_jp': '追憶の試練',
      'difficulties': [
          {
            'quest_id': '788',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
    ]},
    '177': {
      'desc_jp': '統括AI【追憶】',
      'short_desc_jp': 'AI(追憶)',
      'group_desc_jp': '追憶の試練',
      'difficulties': [
          {
            'quest_id': '789',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
    ]},
    '178': {
      'desc_jp': 'ロストオブリビオン【追憶】',
      'short_desc_jp': 'オブリビ(追憶)',
      'group_desc_jp': '追憶の試練',
      'difficulties': [
          {
            'quest_id': '790',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
    ]},
    '179': {
      'desc_jp': '前鬼後鬼【追憶】',
      'short_desc_jp': '前後鬼(追憶)',
      'group_desc_jp': '追憶の試練',
      'difficulties': [
          {
            'quest_id': '791',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
    ]},
    '180': {
      'desc_jp': '星喰いデオフラスス【追憶】',
      'short_desc_jp': 'デオフラ(追憶)',
      'group_desc_jp': '追憶の試練',
      'difficulties': [
          {
            'quest_id': '792',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
    ]},
    '181': {
      'desc_jp': 'ショコラバード【追憶】',
      'short_desc_jp': 'チョコ鳥(追憶)',
      'group_desc_jp': '追憶の試練',
      'difficulties': [
          {
            'quest_id': '793',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
    ]},
    '183': {
      'desc_jp': 'マザー・ラヴ【追憶】',
      'short_desc_jp': 'ラヴ(追憶)',
      'group_desc_jp': '追憶の試練',
      'difficulties': [
          {
            'quest_id': '794',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
    ]},
    '184': {
      'desc_jp': 'プロキオ変異体【追憶】',
      'short_desc_jp': 'プロキオ(追憶)',
      'group_desc_jp': '追憶の試練',
      'difficulties': [
          {
            'quest_id': '795',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
    ]},
    '222': {
      'desc_jp': 'マグノス【追憶】',
      'short_desc_jp': 'マグノス(追憶)',
      'group_desc_jp': '追憶の試練',
      'difficulties': [
          {
            'quest_id': '862',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
    ]},
    '223': {
      'desc_jp': 'ドラゴンイーター【追憶】',
      'short_desc_jp': '龍喰い(追憶)',
      'group_desc_jp': '追憶の試練',
      'difficulties': [
          {
            'quest_id': '863',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
    ]},
    '59': {
      'desc_jp': '暴走ロメロ',
      'short_desc_jp': 'ロメロ',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '343',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '344',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '345',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '346',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '347',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '348',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '349',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '350',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '61': {
      'desc_jp': '風神・雷神',
      'short_desc_jp': '風雷神',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '360',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '361',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '362',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '363',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '364',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '365',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '366',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '367',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '78': {
      'desc_jp': 'グラトドン',
      'short_desc_jp': 'グラトド',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '443',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '444',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '445',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '446',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '447',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '448',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '449',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '450',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '97': {
      'desc_jp': 'ジャックオランタン',
      'short_desc_jp': '🎃',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '516',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '522',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '517',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '518',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '519',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '523',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '520',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '521',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '103': {
      'desc_jp': '聖夜の雪像G',
      'short_desc_jp': '⛄G',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '551',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '552',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '553',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '554',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '555',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '556',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '557',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '558',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '21': {
      'desc_jp': '比翼の使い魔',
      'short_desc_jp': '二羽鳥',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '37',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '56',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '75',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '94',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '113',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '132',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '151',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '170',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '107': {
      'desc_jp': 'アークガーディアン',
      'short_desc_jp': 'ガーディアン',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '568',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '569',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '570',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '571',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '572',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '576',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '574',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '575',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '108': {
      'desc_jp': 'A・シープマテリア',
      'short_desc_jp': '🐑',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '577',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '578',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '579',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '580',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '581',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '163': {
      'desc_jp': '刈り取りくん',
      'short_desc_jp': '刈り取り',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '724',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '725',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '726',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '727',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '728',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '729',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '730',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '731',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '162': {
      'desc_jp': '廃龍イルフリード',
      'short_desc_jp': 'イルフリ',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '723',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '720',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '719',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '722',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '721',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '164': {
      'desc_jp': 'ヌルプルキング',
      'short_desc_jp': 'プル👑',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '732',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '733',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '734',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '735',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '736',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '737',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '738',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '739',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '168': {
      'desc_jp': 'STM-パリデス',
      'short_desc_jp': '🚁',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '759',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '757',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '758',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '760',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '761',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '214': {
      'desc_jp': 'ブラックドラゴン(ブラッククローバー)',
      'short_desc_jp': '黒ドラ(ブラクロ)',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '829',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '830',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '831',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '832',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '833',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '834',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '835',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '836',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '218': {
      'desc_jp': 'パラサイト・アビス',
      'short_desc_jp': 'パラアビ',
      'group_desc_jp': '期間限定ボス',
      'difficulties': [
          {
            'quest_id': '861',
            'pk': '2',
            'desc_jp': 'チャレンジシングルバトル 超級+',
            'short_desc_jp': 'CSB超級+',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '857',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '858',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '859',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '860',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '45': {
      'desc_jp': 'タイムアタックバトル 火の試練',
      'short_desc_jp': 'TA火試練',
      'group_desc_jp': 'TA試練',
      'difficulties': [
          {
            'quest_id': '300',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '46': {
      'desc_jp': 'タイムアタックバトル 水の試練',
      'short_desc_jp': 'TA水試練',
      'group_desc_jp': 'TA試練',
      'difficulties': [
          {
            'quest_id': '301',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '47': {
      'desc_jp': 'タイムアタックバトル 雷の試練',
      'short_desc_jp': 'TA雷試練',
      'group_desc_jp': 'TA試練',
      'difficulties': [
          {
            'quest_id': '302',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '48': {
      'desc_jp': 'タイムアタックバトル 風の試練',
      'short_desc_jp': 'TA風試練',
      'group_desc_jp': 'TA試練',
      'difficulties': [
          {
            'quest_id': '303',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '49': {
      'desc_jp': 'タイムアタックバトル 光の試練',
      'short_desc_jp': 'TA光試練',
      'group_desc_jp': 'TA試練',
      'difficulties': [
          {
            'quest_id': '304',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '50': {
      'desc_jp': 'タイムアタックバトル 闇の試練',
      'short_desc_jp': 'TA闇試練',
      'group_desc_jp': 'TA試練',
      'difficulties': [
          {
            'quest_id': '305',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '51': {
      'desc_jp': 'タイムアタックバトル(2021/2)',
      'short_desc_jp': 'TA21/02',
      'group_desc_jp': 'TA',
      'difficulties': [
          {
            'quest_id': '307',
            'pk': '33',
            'desc_jp': 'Lv5',
            'short_desc_jp': 'Lv5',
            'group_desc_jp': 'TA'
          },
          {
            'quest_id': '308',
            'pk': '34',
            'desc_jp': 'Lv4',
            'short_desc_jp': 'Lv4',
            'group_desc_jp': 'TA'
          },
          {
            'quest_id': '309',
            'pk': '35',
            'desc_jp': 'Lv3',
            'short_desc_jp': 'Lv3',
            'group_desc_jp': 'TA'
          },
          {
            'quest_id': '310',
            'pk': '36',
            'desc_jp': 'Lv2',
            'short_desc_jp': 'Lv2',
            'group_desc_jp': 'TA'
          },
          {
            'quest_id': '311',
            'pk': '37',
            'desc_jp': 'Lv1',
            'short_desc_jp': 'Lv1',
            'group_desc_jp': 'TA'
          },
    ]},
    '60': {
      'desc_jp': 'レーヌ・ブル',
      'short_desc_jp': '水レーヌ',
      'group_desc_jp': 'レーヌシリーズ',
      'difficulties': [
          {
            'quest_id': '351',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '352',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '353',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '354',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '355',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '356',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '357',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '359',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '98': {
      'desc_jp': 'レーヌ・ルージュ',
      'short_desc_jp': '火レーヌ',
      'group_desc_jp': 'レーヌシリーズ',
      'difficulties': [
          {
            'quest_id': '534',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '535',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '536',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '537',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '538',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '539',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '540',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '541',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '173': {
      'desc_jp': 'レーヌ・ヴェルト',
      'short_desc_jp': '風レーヌ',
      'group_desc_jp': 'レーヌシリーズ',
      'difficulties': [
          {
            'quest_id': '779',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '780',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '781',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '782',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '783',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '784',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '785',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '786',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '67': {
      'desc_jp': '雷亀プログレオ',
      'short_desc_jp': '雷亀',
      'group_desc_jp': '精霊獣シリーズ',
      'difficulties': [
          {
            'quest_id': '893',
            'pk': '60',
            'desc_jp': 'マルチ 地獄級',
            'short_desc_jp': 'マルチ地獄級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '387',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '388',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '389',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '390',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '894',
            'pk': '61',
            'desc_jp': 'シングル 地獄級',
            'short_desc_jp': 'シングル地獄級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '391',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '392',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '393',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '394',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '113': {
      'desc_jp': '火魔オルタネア',
      'short_desc_jp': '火魔',
      'group_desc_jp': '精霊獣シリーズ',
      'difficulties': [
          {
            'quest_id': '895',
            'pk': '60',
            'desc_jp': 'マルチ 地獄級',
            'short_desc_jp': 'マルチ地獄級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '606',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '607',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '608',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '609',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '896',
            'pk': '61',
            'desc_jp': 'シングル 地獄級',
            'short_desc_jp': 'シングル地獄級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '610',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '611',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '612',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '613',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '87': {
      'desc_jp': '水鬼スラムゴン',
      'short_desc_jp': '水鬼',
      'group_desc_jp': '精霊獣シリーズ',
      'difficulties': [
          {
            'quest_id': '897',
            'pk': '60',
            'desc_jp': 'マルチ 地獄級',
            'short_desc_jp': 'マルチ地獄級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '463',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '465',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '466',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '467',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '898',
            'pk': '61',
            'desc_jp': 'シングル 地獄級',
            'short_desc_jp': 'シングル地獄級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '468',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '464',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '469',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '470',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '161': {
      'desc_jp': '風師アトモシア',
      'short_desc_jp': '🐍',
      'group_desc_jp': '精霊獣シリーズ',
      'difficulties': [
          {
            'quest_id': '899',
            'pk': '60',
            'desc_jp': 'マルチ 地獄級',
            'short_desc_jp': 'マルチ地獄級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '717',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '715',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '713',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '711',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '900',
            'pk': '61',
            'desc_jp': 'シングル 地獄級',
            'short_desc_jp': 'シングル地獄級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '718',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '716',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '714',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '712',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '156': {
      'desc_jp': '光蜘ドゥーメオ',
      'short_desc_jp': '光蜘蛛',
      'group_desc_jp': '精霊獣シリーズ',
      'difficulties': [
          {
            'quest_id': '901',
            'pk': '60',
            'desc_jp': 'マルチ 地獄級',
            'short_desc_jp': 'マルチ地獄級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '662',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '663',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '664',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '665',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '902',
            'pk': '61',
            'desc_jp': 'シングル 地獄級',
            'short_desc_jp': 'シングル地獄級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '666',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '667',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '668',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '669',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '169': {
      'desc_jp': '闇鳳シアトリオ',
      'short_desc_jp': '闇鳳',
      'group_desc_jp': '精霊獣シリーズ',
      'difficulties': [
          {
            'quest_id': '903',
            'pk': '60',
            'desc_jp': 'マルチ 地獄級',
            'short_desc_jp': 'マルチ地獄級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '749',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '750',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '751',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '752',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '904',
            'pk': '61',
            'desc_jp': 'シングル 地獄級',
            'short_desc_jp': 'シングル地獄級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '753',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '754',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '755',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '756',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '64': {
      'desc_jp': '旋風土機ハニンガー',
      'short_desc_jp': '風ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '368',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '369',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '370',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '211': {
      'desc_jp': '旋風直撃ハニンガー',
      'short_desc_jp': '風直撃ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '820',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '821',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '822',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '212': {
      'desc_jp': '旋風強振ハニンガー',
      'short_desc_jp': '風強振ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '823',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '824',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '825',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '213': {
      'desc_jp': '旋風必殺ハニンガー',
      'short_desc_jp': '風必殺ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '826',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '827',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '828',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '63': {
      'desc_jp': '雲水土機ハニンガー',
      'short_desc_jp': '水ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '371',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '372',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '373',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '104': {
      'desc_jp': '雲水狂乱ハニンガー',
      'short_desc_jp': '水狂乱ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '559',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '560',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '561',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '105': {
      'desc_jp': '雲水必殺ハニンガー',
      'short_desc_jp': '水必殺ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '562',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '563',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '564',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '106': {
      'desc_jp': '雲水強振ハニンガー',
      'short_desc_jp': '水強振ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '565',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '566',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '567',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '62': {
      'desc_jp': '閃火土機ハニンガー',
      'short_desc_jp': '火ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '374',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '375',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '376',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '73': {
      'desc_jp': '宵闇土機ハニンガー',
      'short_desc_jp': '闇ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '419',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '420',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '421',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '153': {
      'desc_jp': '宵闇必殺ハニンガー',
      'short_desc_jp': '闇必殺ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '653',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '654',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '655',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '154': {
      'desc_jp': '宵闇強振ハニンガー',
      'short_desc_jp': '闇強振ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '656',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '657',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '658',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '155': {
      'desc_jp': '宵闇直撃ハニンガー',
      'short_desc_jp': '闇直撃ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '659',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '660',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '661',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '74': {
      'desc_jp': '溢光土機ハニンガー',
      'short_desc_jp': '光ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '422',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '423',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '424',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '94': {
      'desc_jp': '溢光直撃ハニンガー',
      'short_desc_jp': '光直撃ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '507',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '508',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '509',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '95': {
      'desc_jp': '溢光必殺ハニンガー',
      'short_desc_jp': '光必殺ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '510',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '511',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '512',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '96': {
      'desc_jp': '溢光強振ハニンガー',
      'short_desc_jp': '光強振ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '513',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '514',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '515',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '75': {
      'desc_jp': '奔雷土機ハニンガー',
      'short_desc_jp': '雷ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '425',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '426',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '427',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '165': {
      'desc_jp': '奔雷直撃ハニンガー',
      'short_desc_jp': '雷直撃ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '740',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '741',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '742',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '166': {
      'desc_jp': '奔雷強振ハニンガー',
      'short_desc_jp': '雷強振ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '743',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '744',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '745',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '167': {
      'desc_jp': '奔雷必殺ハニンガー',
      'short_desc_jp': '雷必殺ハニワ',
      'group_desc_jp': 'ハニワシリーズ',
      'difficulties': [
          {
            'quest_id': '746',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '747',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '748',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '101': {
      'desc_jp': '戦陣の宴',
      'short_desc_jp': '戦陣',
      'group_desc_jp': '戦陣の宴シリーズ',
      'difficulties': [
          {
            'quest_id': '542',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '543',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '544',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '545',
            'pk': '30',
            'desc_jp': 'シングル 初級',
            'short_desc_jp': 'シングル初級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '114': {
      'desc_jp': '因竜の宴',
      'short_desc_jp': '因竜の宴',
      'group_desc_jp': '戦陣の宴シリーズ',
      'difficulties': [
          {
            'quest_id': '614',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '615',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '616',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '617',
            'pk': '30',
            'desc_jp': 'シングル 初級',
            'short_desc_jp': 'シングル初級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '157': {
      'desc_jp': '契鰭の宴',
      'short_desc_jp': '戦陣🦈',
      'group_desc_jp': '戦陣の宴シリーズ',
      'difficulties': [
          {
            'quest_id': '670',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '671',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '672',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '673',
            'pk': '30',
            'desc_jp': 'シングル 初級',
            'short_desc_jp': 'シングル初級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '174': {
      'desc_jp': '乏竜の宴',
      'short_desc_jp': '乏竜の宴',
      'group_desc_jp': '戦陣の宴シリーズ',
      'difficulties': [
          {
            'quest_id': '796',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '797',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '798',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '799',
            'pk': '30',
            'desc_jp': 'シングル 初級',
            'short_desc_jp': 'シングル初級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '111': {
      'desc_jp': 'ショコラバード(コンバットダイバー)',
      'short_desc_jp': 'チョコ鳥(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '592',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '591',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '590',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '110': {
      'desc_jp': 'グラトドン(コンバットダイバー)',
      'short_desc_jp': 'グラトド(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '595',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '594',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '593',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '112': {
      'desc_jp': 'レシタール(コンバットダイバー)',
      'short_desc_jp': 'レシ(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '596',
            'pk': '48',
            'desc_jp': '1戦目',
            'short_desc_jp': '1戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '597',
            'pk': '49',
            'desc_jp': '2戦目',
            'short_desc_jp': '2戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '598',
            'pk': '50',
            'desc_jp': '3戦目',
            'short_desc_jp': '3戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '599',
            'pk': '51',
            'desc_jp': '4戦目',
            'short_desc_jp': '4戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '600',
            'pk': '52',
            'desc_jp': '5戦目',
            'short_desc_jp': '5戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '601',
            'pk': '53',
            'desc_jp': '6戦目',
            'short_desc_jp': '6戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '602',
            'pk': '54',
            'desc_jp': '7戦目',
            'short_desc_jp': '7戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '603',
            'pk': '55',
            'desc_jp': '8戦目',
            'short_desc_jp': '8戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '604',
            'pk': '56',
            'desc_jp': '9戦目',
            'short_desc_jp': '9戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '605',
            'pk': '57',
            'desc_jp': '10戦目~',
            'short_desc_jp': '10戦目~',
            'group_desc_jp': 'エンドレスバトル'
          },
    ]},
    '160': {
      'desc_jp': 'タイダルクラーケン(コンバットダイバー)',
      'short_desc_jp': '烏賊(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '674',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '675',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '676',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '683',
            'pk': '48',
            'desc_jp': '1戦目',
            'short_desc_jp': '1戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '684',
            'pk': '49',
            'desc_jp': '2戦目',
            'short_desc_jp': '2戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '685',
            'pk': '50',
            'desc_jp': '3戦目',
            'short_desc_jp': '3戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '686',
            'pk': '51',
            'desc_jp': '4戦目',
            'short_desc_jp': '4戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '687',
            'pk': '52',
            'desc_jp': '5戦目',
            'short_desc_jp': '5戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '688',
            'pk': '53',
            'desc_jp': '6戦目',
            'short_desc_jp': '6戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '689',
            'pk': '54',
            'desc_jp': '7戦目',
            'short_desc_jp': '7戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '690',
            'pk': '55',
            'desc_jp': '8戦目',
            'short_desc_jp': '8戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '691',
            'pk': '56',
            'desc_jp': '9戦目',
            'short_desc_jp': '9戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '692',
            'pk': '57',
            'desc_jp': '10戦目~',
            'short_desc_jp': '10戦目~',
            'group_desc_jp': 'エンドレスバトル'
          },
    ]},
    '159': {
      'desc_jp': '水鬼スラムゴン(コンバットダイバー)',
      'short_desc_jp': '水鬼(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '677',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '678',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '679',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '158': {
      'desc_jp': 'ロストオブリビオン(コンバットダイバー)',
      'short_desc_jp': 'オブリビ(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '680',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '681',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '682',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '172': {
      'desc_jp': '統括AI(コンバットダイバー)',
      'short_desc_jp': 'AI(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '768',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '769',
            'pk': '48',
            'desc_jp': '1戦目',
            'short_desc_jp': '1戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '770',
            'pk': '49',
            'desc_jp': '2戦目',
            'short_desc_jp': '2戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '771',
            'pk': '50',
            'desc_jp': '3戦目',
            'short_desc_jp': '3戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '772',
            'pk': '51',
            'desc_jp': '4戦目',
            'short_desc_jp': '4戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '773',
            'pk': '52',
            'desc_jp': '5戦目',
            'short_desc_jp': '5戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '774',
            'pk': '53',
            'desc_jp': '6戦目',
            'short_desc_jp': '6戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '775',
            'pk': '54',
            'desc_jp': '7戦目',
            'short_desc_jp': '7戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '776',
            'pk': '55',
            'desc_jp': '8戦目',
            'short_desc_jp': '8戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '777',
            'pk': '56',
            'desc_jp': '9戦目',
            'short_desc_jp': '9戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '778',
            'pk': '57',
            'desc_jp': '10戦目~',
            'short_desc_jp': '10戦目~',
            'group_desc_jp': 'エンドレスバトル'
          },
    ]},
    '171': {
      'desc_jp': 'ステラバスター(コンバットダイバー)',
      'short_desc_jp': 'ステバス(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '762',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '763',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '764',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '170': {
      'desc_jp': 'ファ・ルインガード(コンバットダイバー)',
      'short_desc_jp': 'ルイガ(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '765',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
          {
            'quest_id': '766',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '767',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '215': {
      'desc_jp': 'ボルトホロウ(コンバットダイバー)',
      'short_desc_jp': '木(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '837',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '838',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '839',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '216': {
      'desc_jp': '前鬼後鬼(コンバットダイバー)',
      'short_desc_jp': '前後鬼(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '840',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '841',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '842',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '217': {
      'desc_jp': '星喰いデオフラスス(コンバットダイバー)',
      'short_desc_jp': 'デオフラ(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '843',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '844',
            'pk': '48',
            'desc_jp': '1戦目',
            'short_desc_jp': '1戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '845',
            'pk': '49',
            'desc_jp': '2戦目',
            'short_desc_jp': '2戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '846',
            'pk': '50',
            'desc_jp': '3戦目',
            'short_desc_jp': '3戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '847',
            'pk': '51',
            'desc_jp': '4戦目',
            'short_desc_jp': '4戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '848',
            'pk': '52',
            'desc_jp': '5戦目',
            'short_desc_jp': '5戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '849',
            'pk': '53',
            'desc_jp': '6戦目',
            'short_desc_jp': '6戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '850',
            'pk': '54',
            'desc_jp': '7戦目',
            'short_desc_jp': '7戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '851',
            'pk': '55',
            'desc_jp': '8戦目',
            'short_desc_jp': '8戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '852',
            'pk': '56',
            'desc_jp': '9戦目',
            'short_desc_jp': '9戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '853',
            'pk': '57',
            'desc_jp': '10戦目~',
            'short_desc_jp': '10戦目~',
            'group_desc_jp': 'エンドレスバトル'
          },
    ]},
    '228': {
      'desc_jp': 'ジャックオランタン(コンバットダイバー)',
      'short_desc_jp': '🎃(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '875',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '876',
            'pk': '48',
            'desc_jp': '1戦目',
            'short_desc_jp': '1戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '877',
            'pk': '49',
            'desc_jp': '2戦目',
            'short_desc_jp': '2戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '878',
            'pk': '50',
            'desc_jp': '3戦目',
            'short_desc_jp': '3戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '879',
            'pk': '51',
            'desc_jp': '4戦目',
            'short_desc_jp': '4戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '880',
            'pk': '52',
            'desc_jp': '5戦目',
            'short_desc_jp': '5戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '881',
            'pk': '53',
            'desc_jp': '6戦目',
            'short_desc_jp': '6戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '882',
            'pk': '54',
            'desc_jp': '7戦目',
            'short_desc_jp': '7戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '884',
            'pk': '55',
            'desc_jp': '8戦目',
            'short_desc_jp': '8戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '883',
            'pk': '55',
            'desc_jp': '8戦目',
            'short_desc_jp': '8戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '885',
            'pk': '56',
            'desc_jp': '9戦目',
            'short_desc_jp': '9戦目',
            'group_desc_jp': 'エンドレスバトル'
          },
          {
            'quest_id': '886',
            'pk': '57',
            'desc_jp': '10戦目~',
            'short_desc_jp': '10戦目~',
            'group_desc_jp': 'エンドレスバトル'
          },
    ]},
    '227': {
      'desc_jp': 'イルメタレイ(コンバットダイバー)',
      'short_desc_jp': '光廃竜(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '887',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '888',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '889',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '226': {
      'desc_jp': '瑞狐(コンバットダイバー)',
      'short_desc_jp': '瑞狐(CD)',
      'group_desc_jp': 'コンバットダイバー',
      'difficulties': [
          {
            'quest_id': '890',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '891',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '892',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '219': {
      'desc_jp': '歩兵の粛清者',
      'short_desc_jp': '歩兵粛清',
      'group_desc_jp': '粛清者討伐戦',
      'difficulties': [
          {
            'quest_id': '854',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
    ]},
    '220': {
      'desc_jp': '僧正の粛清者',
      'short_desc_jp': '僧正粛清',
      'group_desc_jp': '粛清者討伐戦',
      'difficulties': [
          {
            'quest_id': '855',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
    ]},
    '221': {
      'desc_jp': '異形の粛清者',
      'short_desc_jp': '異形粛清',
      'group_desc_jp': '粛清者討伐戦',
      'difficulties': [
          {
            'quest_id': '856',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
    ]},
    '224': {
      'desc_jp': '女帝の粛清者',
      'short_desc_jp': '女帝粛清',
      'group_desc_jp': '粛清者討伐戦',
      'difficulties': [
          {
            'quest_id': '864',
            'pk': '1',
            'desc_jp': 'チャレンジシングルバトル 地獄級',
            'short_desc_jp': 'CSB地獄',
            'group_desc_jp': 'CSB'
          },
    ]},
    '225': {
      'desc_jp': '紅機兵ハインライト',
      'short_desc_jp': '紅機兵',
      'group_desc_jp': '機兵シリーズ',
      'difficulties': [
          {
            'quest_id': '874',
            'pk': '59',
            'desc_jp': 'マルチ 決戦級',
            'short_desc_jp': 'マルチ決戦級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '865',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '866',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '867',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '868',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '869',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '870',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '871',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '872',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '232': {
      'desc_jp': '翠機兵クラーグ',
      'short_desc_jp': '翠機兵',
      'group_desc_jp': '機兵シリーズ',
      'difficulties': [
          {
            'quest_id': '908',
            'pk': '59',
            'desc_jp': 'マルチ 決戦級',
            'short_desc_jp': 'マルチ決戦級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '909',
            'pk': '21',
            'desc_jp': 'マルチ 超級',
            'short_desc_jp': 'マルチ超級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '910',
            'pk': '22',
            'desc_jp': 'マルチ 上級+',
            'short_desc_jp': 'マルチ上級+',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '911',
            'pk': '23',
            'desc_jp': 'マルチ 上級',
            'short_desc_jp': 'マルチ上級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '912',
            'pk': '24',
            'desc_jp': 'マルチ 中級',
            'short_desc_jp': 'マルチ中級',
            'group_desc_jp': 'マルチ'
          },
          {
            'quest_id': '913',
            'pk': '26',
            'desc_jp': 'シングル 超級',
            'short_desc_jp': 'シングル超級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '914',
            'pk': '27',
            'desc_jp': 'シングル 上級+',
            'short_desc_jp': 'シングル上級+',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '915',
            'pk': '28',
            'desc_jp': 'シングル 上級',
            'short_desc_jp': 'シングル上級',
            'group_desc_jp': 'シングル'
          },
          {
            'quest_id': '916',
            'pk': '29',
            'desc_jp': 'シングル 中級',
            'short_desc_jp': 'シングル中級',
            'group_desc_jp': 'シングル'
          },
    ]},
    '56': {
      'desc_jp': 'キノ500体',
      'short_desc_jp': 'キノ500',
      'group_desc_jp': '期間限定ザコ',
      'difficulties': [
          {
            'quest_id': '332',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '71': {
      'desc_jp': 'キノ600体',
      'short_desc_jp': 'キノ600',
      'group_desc_jp': '期間限定ザコ',
      'difficulties': [
          {
            'quest_id': '413',
            'pk': '41',
            'desc_jp': '難易度固定',
            'short_desc_jp': ' ',
            'group_desc_jp': ' '
          },
    ]},
    '93': {
      'desc_jp': 'かたい人形',
      'short_desc_jp': '硬人形',
      'group_desc_jp': '練習バトル',
      'difficulties': [
          {
            'quest_id': '476',
            'pk': '42',
            'desc_jp': '火',
            'short_desc_jp': '火',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '477',
            'pk': '43',
            'desc_jp': '水',
            'short_desc_jp': '水',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '478',
            'pk': '44',
            'desc_jp': '雷',
            'short_desc_jp': '雷',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '479',
            'pk': '45',
            'desc_jp': '風',
            'short_desc_jp': '風',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '480',
            'pk': '46',
            'desc_jp': '光',
            'short_desc_jp': '光',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '481',
            'pk': '47',
            'desc_jp': '闇',
            'short_desc_jp': '闇',
            'group_desc_jp': '練習バトル'
          },
    ]},
    '92': {
      'desc_jp': 'はやい人形',
      'short_desc_jp': '速人形',
      'group_desc_jp': '練習バトル',
      'difficulties': [
          {
            'quest_id': '482',
            'pk': '42',
            'desc_jp': '火',
            'short_desc_jp': '火',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '483',
            'pk': '43',
            'desc_jp': '水',
            'short_desc_jp': '水',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '484',
            'pk': '44',
            'desc_jp': '雷',
            'short_desc_jp': '雷',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '485',
            'pk': '45',
            'desc_jp': '風',
            'short_desc_jp': '風',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '486',
            'pk': '46',
            'desc_jp': '光',
            'short_desc_jp': '光',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '487',
            'pk': '47',
            'desc_jp': '闇',
            'short_desc_jp': '闇',
            'group_desc_jp': '練習バトル'
          },
    ]},
    '91': {
      'desc_jp': 'つよい人形',
      'short_desc_jp': '強人形',
      'group_desc_jp': '練習バトル',
      'difficulties': [
          {
            'quest_id': '488',
            'pk': '42',
            'desc_jp': '火',
            'short_desc_jp': '火',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '489',
            'pk': '43',
            'desc_jp': '水',
            'short_desc_jp': '水',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '490',
            'pk': '44',
            'desc_jp': '雷',
            'short_desc_jp': '雷',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '491',
            'pk': '45',
            'desc_jp': '風',
            'short_desc_jp': '風',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '492',
            'pk': '46',
            'desc_jp': '光',
            'short_desc_jp': '光',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '493',
            'pk': '47',
            'desc_jp': '闇',
            'short_desc_jp': '闇',
            'group_desc_jp': '練習バトル'
          },
    ]},
    '90': {
      'desc_jp': '呪いの人形',
      'short_desc_jp': '呪人形',
      'group_desc_jp': '練習バトル',
      'difficulties': [
          {
            'quest_id': '494',
            'pk': '42',
            'desc_jp': '火',
            'short_desc_jp': '火',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '495',
            'pk': '43',
            'desc_jp': '水',
            'short_desc_jp': '水',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '496',
            'pk': '44',
            'desc_jp': '雷',
            'short_desc_jp': '雷',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '497',
            'pk': '45',
            'desc_jp': '風',
            'short_desc_jp': '風',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '498',
            'pk': '46',
            'desc_jp': '光',
            'short_desc_jp': '光',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '499',
            'pk': '47',
            'desc_jp': '闇',
            'short_desc_jp': '闇',
            'group_desc_jp': '練習バトル'
          },
    ]},
    '89': {
      'desc_jp': '守りの人形',
      'short_desc_jp': '守人形',
      'group_desc_jp': '練習バトル',
      'difficulties': [
          {
            'quest_id': '500',
            'pk': '42',
            'desc_jp': '火',
            'short_desc_jp': '火',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '502',
            'pk': '43',
            'desc_jp': '水',
            'short_desc_jp': '水',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '503',
            'pk': '44',
            'desc_jp': '雷',
            'short_desc_jp': '雷',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '504',
            'pk': '45',
            'desc_jp': '風',
            'short_desc_jp': '風',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '505',
            'pk': '46',
            'desc_jp': '光',
            'short_desc_jp': '光',
            'group_desc_jp': '練習バトル'
          },
          {
            'quest_id': '506',
            'pk': '47',
            'desc_jp': '闇',
            'short_desc_jp': '闇',
            'group_desc_jp': '練習バトル'
          },
    ]},
};