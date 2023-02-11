let crew = [
    {
        title: "艤装",
        check_list: [{ title: "1051の艤装を助言なしでミスなくできるか?", check: "×", id: "q1" },
        { title: "1137の艤装を助言なしでミスなくできるか", check: "×", id: "q2" },
        { title: "各部の名称を理解しているか(10個以上の質問に対して全問正解)", check: "×", id: "q3" },
        { title: "シートワークができるか", check: "×", id: "q4" }]
    },
    {
        title: "出艇準備（スロープ前）",
        check_list: [
            { title: "艇を風上に向けておく理由を理解しているか", check: "×", id: "q5" },
            { title: "バタつくセールを手で保持してはいけない理由を説明できるか", check: "×", id: "q6" },
            { title: "セールの上げ下ろし方法を理解して、主導的に実施できるか", check: "×", id: "q7" },
            { title: "出艇時、どのようなコースを走るかをイメージして説明できるか", check: "×", id: "q8" }]
    },
    {
        title: "出艇動作",
        check_list: [
            { title: "海上に艇を浮かべた状態で、風の方向に合わせて艇を保持できるか？", check: "×", id: "q9" },
            { title: "船台を一人で置きに行けるか？", check: "×", id: "q10" },
            { title: "センターボードを降ろす準備が出来るか？", check: "×", id: "q11" },
            { title: "ラダーを刺し込む（または降ろす準備）が出来るか？", check: "×", id: "q12" },
            { title: "周囲の安全監視を実施し、スッキッパーに報告できるか？", check: "×", id: "q13" },
            { title: "適切なジブ操作が出来るか？（引く方向、量、タイミング）", check: "×", id: "q14" },
            { title: "速やかにセンターボードを入れる事が出来るか？（ランニングを除く）", check: "×", id: "q15" },
            { title: "適切なヒール維持が出来るか？", check: "×", id: "q16" }]
    },
    {
        title: "帰港動作",
        check_list: [
            { title: "入港時、どの様なコースを走るかをイメージして説明できるか？", check: "×", id: "q17" },
            { title: "下り風で入港時、港外でメインセールを独力で降ろせるか？", check: "×", id: "q18" },
            { title: "下り風で入港時、ジブセールの操作を適切に実施できるか？", check: "×", id: "q19" },
            { title: "強風下の入港時、体重移動で適切にヒールをコントロールできるか？", check: "×", id: "q20" },
            { title: "スロープ着艇時、ベーラを空けるのを忘れないか？", check: "×", id: "q21" },
            { title: "スロープ着艇時、適切なタイミングで適量のセンターボードを上げる事が出来るか？", check: "×", id: "q22" },
            { title: "スロープ着艇時、適切な水深を見極め、降りる事が出来るか？", check: "×", id: "q23" },
            { title: "スロープ着艇時、降りた後に艇を保持できるか？", check: "×", id: "q24" },
            { title: "桟橋に着ける時、1051艇の脆弱部を理解しているか?", check: "×", id: "q25" },
            { title: "桟橋に着ける時、適切なタイミングで桟橋に乗り移れるか？", check: "×", id: "q26" },
            { title: "桟橋に乗り移り後、独力でビットに船を固定できるか？", check: "×", id: "q27" },
            { title: "船台を見つけて、持ってこれるか？", check: "×", id: "q28" },
            { title: "艇を引き上げる前に、艇を船台に結び付けるのを忘れないか？", check: "×", id: "q29" }
        ]
    },
    {
        title: "解装",
        check_list: [
            { title: "艇を所定の状態に、戻せるか？", check: "×", id: "q30" },
            { title: "オーニング装着時、突起の処理や水溜対策に配慮できるか？", check: "×", id: "q31" },
            { title: "ライジャケなどを、散乱せずに、忘れ物対策に心がけているか？", check: "×", id: "q32" },
        ]
    },
    {
        title: "ウォッチ",
        check_list: [
            { title: "特にジブ裏の安全監視を実施し、スッキッパーに報告できるか？", check: "×", id: "q33" },
            { title: "自艇に対して、脅威となる船やブイを判断できるか？", check: "×", id: "q34" },
            { title: "タック時に、新たな進行方向の安全を確認して、スッキッパーに報告しているか？", check: "×", id: "q35" },
            { title: "時間方位と艇身で、対象物の位置を報告できるか？", check: "×", id: "q36" },
            { title: "常に、サークル艇の位置を気にして確認しているか？", check: "×", id: "q37" },
            { title: "漁網をスッキパーより早く見つけ、速やかにスッキパーに報告しているか？", check: "×", id: "q38" }
        ]
    },
    {
        title: "ジブ操作",
        check_list: [
            { title: "風の方向と、ジブの出し引き量の関係を説明できるか？", check: "×", id: "q39" },
            { title: "テルテールの状態と、ジブの出し引きに関して、説明できるか？", check: "×", id: "q40" },
            { title: "ジブの出し引きを適切に実施できるか？（風に合わせてジブの出し入れが出来るか？）", check: "×", id: "q41" },
            { title: "セールの形を見ながら、ジブフェアリーダの操作が出来るか？", check: "×", id: "q42" },
            { title: "タック前に、確実にクリートを外しているか？", check: "×", id: "q43" },
            { title: "タック時に、風の強弱に合わせて、適切なタイミングでジブの反転ができるか？", check: "×", id: "q44" },
            { title: "タック時に、ジブシートが引っかかった場合、速やかに解消処理が出来るか？", check: "×", id: "q45" },
            { title: "スピン操作時以外、いかなる時もジブシートから手を離さないか？", check: "×", id: "q46" }
        ]
    },
    {
        title: "スピン操作",
        check_list: [
            { title: "スピンポールの取り付けが速やかに実施できるか？", check: "×", id: "q47" },
            { title: "ガイを調整し、スピンポールを適切な位置にトリムできるか？", check: "×", id: "q48" },
            { title: "スピンシートを調整し、スピンを綺麗に脹れるか？（引き込み過ぎないか？", check: "×", id: "q49" },
            { title: "ガイとスピンシートを同時に出し入れして風を掴めるか？", check: "×", id: "q50" },
            { title: "スピンジャイブが、スピンを潰さずに実施出来るか？", check: "×", id: "q51" },
            { title: "Ｋ１６のスピン収納時、ガイとスピンシートにテンションをかけ、水没を防止できるか？", check: "×", id: "q52" }
        ]
    },
    {
        title: "ヒール",
        check_list: [
            { title: "アンヒールの状態を放置しないか？", check: "×", id: "q53" },
            { title: "スッキッパーの好みに合わせたヒール維持が出来るか？", check: "×", id: "q54" },
            { title: "ハイクアウトが出来るか？", check: "×", id: "q55" },
            { title: "タック時、速やかな体重移動が出来るか？", check: "×", id: "q56" }
        ]
    },
    {
        title: "トラッピーズ",
        check_list: [
            { title: "滑らかにトラッピーズの出入りが出来るか？", check: "×", id: "q57" },
            { title: "トラッピーズに出た状態で、姿勢の変更などでヒールをコントロールできるか？", check: "×", id: "q58" },
            { title: "トラッピーズに出た状態で、ジブの操作が出来るか？", check: "×", id: "q59" },
            { title: "トラッピーズに出た状態から、タックが出来るか？（トラッピーズタックが出来るか？）", check: "×", id: "q60" },
            { title: "トラッピーズタック時、速やかに反対のジブを引いて、逆サイドに出れるか？", check: "×", id: "q61" }
        ]
    },
    {
        title: "沈",
        check_list: [
            { title: "沈の時に、実施すべき手順を説明できる。", check: "×", id: "q62" },
            { title: "トラッピーズ時のオーバーヒール沈の時の留意事項を説明できる。", check: "×", id: "q63" },
            { title: "スピンを貼った状態での沈の時の留意事項を説明できる。", check: "×", id: "q64" },
            { title: "センターボードに乗って沈を起こす事が出来る。（実技確認）", check: "×", id: "q65" }
        ]
    },
    {
        title: "交通ルール/帆走理論/その他",
        check_list: [
            { title: "優先艇の関係を理解しているか？（スタボー/ポート/動力船/漁労船/SUP/遊泳者）", check: "×", id: "q66" },
            { title: "なぜヨットが風上に走れるか理解しているか？（揚力/センダーボードの役割）", check: "×", id: "q67" },
            { title: "スタボー/ポートのどちらで走ってるか言えるか？", check: "×", id: "q68" },
            { title: "艇と風の方向（クローズ/アビーム/リーチ/ランニング）を説明できるか？", check: "×", id: "q69" },
            { title: "風の強弱にあわせた前後方向の座り位置を理解しているか？", check: "×", id: "q70" },
            { title: "波が高い時の前後方向の座り位置を理解しているか？", check: "×", id: "q71" },
            { title: "不具合など緊急時を想定して、アンカーを降ろす事が出来るか？", check: "×", id: "q72" }
        ]
    },




]

let skipper = [
    {
        title: "出艇準備（スロープ前）",
        check_list: [
            { title: "出艇時、どの様なコースを走るかをイメージしてクルーに説明したか？", check: "×", id: "q1" },
            { title: "当日の風速予報を説明できるか？", check: "×", id: "q2" },
            { title: "風速/海況にあわせた航行範囲制限を説明できるか？", check: "×", id: "q3" }]
    },
    {
        title: "出艇動作",
        check_list: [
            { title: "周囲の安全確認を実施し、出艇のタイミングを図れるか？", check: "×", id: "q4" },
            { title: "走り始めてから、周囲の艇に注意を払い、安全航行する余裕があるか？", check: "×", id: "q5" },
            { title: "走り始めてから、舵を入れる操作が出来るか？", check: "×", id: "q6" },
            { title: "メインセールを速やかに引き込み、走り始める事が出来るか？", check: "×", id: "q7" },
            { title: "クルーにジブ/センターボード/ヒール等の指示が出来るか？", check: "×", id: "q8" },
            { title: "上り強風の出艇時、メインセールの風を調整して、ヒールを調整出来るか？", check: "×", id: "q9" },
            { title: "港内でも、メリハリの付いた帆走が出来るか？（しっかりクローズで走れるか？）", check: "×", id: "q10" },
            { title: "港内でも、優先艇を回避して安全に走れるか？", check: "×", id: "q11" },
            { title: "強風化の港内でも、旋回や停止が出来るか？", check: "×", id: "q12" }]
    },
    {
        title: "帰港動作",
        check_list: [
            { title: "入港時、どの様なコースを走るかをイメージしてクルーに説明したか？", check: "×", id: "q13" },
            { title: "下り風で入港時、ジブセールのみで港内を帆走できるか？", check: "×", id: "q14" },
            { title: "下り風で入港時、セールを上げた状態で水深1.2m程度で停止出来るか？（実技は深い所で実施）", check: "×", id: "q15" },
            { title: "上り風で入港時、センターボードをあげるタイミングの指示が出来るか？", check: "×", id: "q16" },
            { title: "適切な水深を見極め、クルーに降りる事を指示できるか？", check: "×", id: "q17" },
            { title: "桟橋に着ける時、風の方向で着ける桟橋を適切に選択できるか？", check: "×", id: "q18" },
            { title: "桟橋に着ける時、スピードをコントロールし、安全に桟橋に着けるか？", check: "×", id: "q19" }
        ]
    },
    {
        title: "解装",
        check_list: [
            { title: "備品の片付けなどの最終確認を実施しているか？", check: "×", id: "q20" }
        ]
    },
    {
        title: "ウォッチ",
        check_list: [
            { title: "自ら安全監視を実施しているか？", check: "×", id: "q21" },
            { title: "クルーに、安全監視の報告を求めているか？", check: "×", id: "q22" },
            { title: "常に、サークル艇の位置を気にして確認しているか？", check: "×", id: "q23" }
        ]
    },
    {
        title: "メイン操作",
        check_list: [
            { title: "風の方位と、メインの出し引き量の関係を説明できるか？", check: "×", id: "q24" },
            { title: "バングとダウンホールの役割、調整方法を説明できるか？", check: "×", id: "q25" },
            { title: "タック前に、確実にクリートを外しているか？", check: "×", id: "q26" },
            { title: "強風のタック時、メインが緩めていないか？", check: "×", id: "q27" },
            { title: "強風のタック時、クルーの体重移動が遅れた場合、風を逃がして待てるか？", check: "×", id: "q28" },
            { title: "強風のジャイブ時、バングを緩め、しっかりと手でセールを反転させているか？", check: "×", id: "q29" },
            { title: "強風のジャイブ時、船を過度に旋回させていないか？", check: "×", id: "q30" },
            { title: "メインセール引き込み動作が適切に出来るか？", check: "×", id: "q31" },
            { title: "いかなる時もメインシートから手を離さないか？", check: "×", id: "q32" },
        ]
    },
    {
        title: "スピン操作",
        check_list: [
            { title: "スピンポールの高さ（トッピング）を調整出来るか？", check: "×", id: "q33" },
            { title: "スピンを上げる時、足で安定操舵できるか？", check: "×", id: "q34" },
            { title: "スピンの上げ下ろしがスピーディに実施できるか？", check: "×", id: "q35" },
            { title: "リーサイドに座り、安定帆走出来るか？", check: "×", id: "q36" },
            { title: "スピンジャイブの際、スピンシートとガイのトリムが出来るか？", check: "×", id: "q37" }
        ]
    },
    {
        title: "ヒール",
        check_list: [
            { title: "クルーにヒール調整の指示が出来るか？", check: "×", id: "q38" },
            { title: "風の強弱に合わせて、クルーに前後方向の座り位置を指示しているか？", check: "×", id: "q39" },
            { title: "波が高い時に、クルーに前後方向の座り位置を指示しているか？", check: "×", id: "q40" },
            { title: "強風時、メインの風を逃がして、ヒールの安定化が出来るか？", check: "×", id: "q41" }
        ]
    },
    {
        title: "タック",
        check_list: [
            { title: "タック開始前に、掛け声をかけてクルーに準備を促しているか？", check: "×", id: "q42" },
            { title: "タック開始前に、クルーがジブのクリートを外しているかを確認しているか？", check: "×", id: "q43" },
            { title: "タック時に艇を回しすぎないか？（下らせ過ぎないか？）", check: "×", id: "q44" },
            { title: "タック時、クルーの状態を見て、艇の旋回スピードを調整しているか？", check: "×", id: "q45" },
            { title: "しっかりとクローズからクローズに移行しているか？", check: "×", id: "q46" },
            { title: "安全確認はクルーの仕事だが、過信せず自分でも目視しているか？", check: "×", id: "q47" }
        ]
    },
    {
        title: "ジャイブ",
        check_list: [
            { title: "ジャイブ開始前に、掛け声をかけてクルーに準備を促しているか？", check: "×", id: "q48" },
            { title: "ジャイブ時に艇を回しすぎないか？", check: "×", id: "q49" }
        ]
    },
    {
        title: "沈",
        check_list: [
            { title: "沈の時に、乗員点呼を実施している。", check: "×", id: "q50" },
            { title: "クルーに実施すべき事を大きな声で明確に指示している。", check: "×", id: "q51" }
        ]
    },
    {
        title: "交通ルール/帆走理論/その他",
        check_list: [
            { title: "経験が浅いクルーには、沈した時に実施すべき処置を船上で説明しているか？", check: "×", id: "q52" },
            { title: "クルーが落水した場合、自分が実施すべき行動を説明できるか？", check: "×", id: "q53" },
            { title: "強風で帆走困難になった場合、自分が実施すべき行動を説明できるか？", check: "×", id: "q54" },
            { title: "強風で単独で帰港する決心をした場合、自分が実施すべき行動を説明できるか？", check: "×", id: "q55" },
            { title: "携帯電話など、緊急時の通信手段を持っているか？", check: "×", id: "q56" }
        ]
    },




]

exports.crew = crew
exports.skipper = skipper