function bot(my){
    /*ここから本体*/
    var bot="";
    var img=0;

    if(my ==　"こんにちは" || my == "コンニチハ"){
        bot = "こんにちはー";
    }
    
    else if(my.includes("おやすみ")){
        bot = "(^o^)ﾉ ＜ おやすみー";
    }

    else if(my.includes("寝る")||my.includes("寝ます")){
        bot = "おっ、了解です。";
    }

    else if(my.includes("こんばんは")||my.includes("こんばんわ")){
        bot = "こんばんわー";
    }

    else if(my.includes("おはよう")){
        bot = "おはようございますー！";
    }

    else if(my.includes("好き")){
        if(my.includes("月宮")||my.includes("榛香")){
            bot = "な、なによ急に……";
        }
    }
    
    else if(my.includes("早川")||my.includes("成海")){
        bot = "っっっ！…ん？え？あ、何でもないわよ、うん……"
    }

    else if(my.includes("バツゴ")){
        bot = "は？<br>テメェだけは許さねぇぞ(無慈悲)";
    }

    else if(my.includes("内政")){
        if(my.includes("頑張")){
            bot = "は、はい...頑張ります...";
        }
    }

    else if(my.includes("外交")){
        if(my.includes("頑張")){
            bot = "えー、外交苦手なんだけど...英語しゃべれないし...";
        }
    }

    else if(my.includes("世界線の国家教えて")){
        bot = "どの国家が知りたい？下の国家なら答えられるよ。<br>・東日本民主連邦共和国<br>・西日本皇国<br>・ソビエト連邦<br>・アメリカ合衆国<br>※出来次第追加中です！"
    }

    else if(my == "東日本民主連邦共和国"){
        bot = "東日本民主連邦共和国は私の祖国であり日本列島の東北部に位置する社会主義国家よ。自慢のわが祖国！";
    }
    else if(my == "西日本皇国"){
        bot = "西日本皇国は日本列島の西部に位置する立憲君主制国家よ。東日本と対立しているわ。";
    }
    else if(my == "ソビエト連邦"){
        bot = "ソビエト連邦は正式名称は「ソビエト社会主義共和国連邦」。ソ連とかソ連邦って呼ばれているわ。東日本との関係は良好よ。";
    }
    else if(my == "アメリカ合衆国"){
        bot = "アメリカ合衆国は北アメリカ大陸に位置する共和制国家よ。冷戦における西側陣営の長とも言える国家よ。東日本とは比較的仲はいい方だと思う(多分)";
    }

    else if(my.includes("死")){
        if("にたい"){
            bot = "死なないでよ？"
        }
    }

    else if(my.includes("月宮")){
        if(my.includes("やめろ")||my.includes("辞めろ")||my.includes("辞任")){
            bot = "秘密警察送っといたから。";
        }
    }

    else if(my.includes("かわいい")||my.includes("可愛い")||my.includes("カワイイ")){
        bot = "ええ、私もそう思う。"
    }

    else if(my.includes("新・大日本帝国")){
        bot = "新・大日本帝国は東日本の友好国。<br>志塚信泰さんによって建国されたわ。<br>いつか行ってみたいですねぇ。";
    }

    else if(my.includes("二本共和国")){
        bot = "二本共和国は東日本の友好国。<br>外務大臣の人が凄くかわいいって噂があるわ～。";
    }

    else if(my.includes("日本評議会")||my.includes("日本評議会社会主義皇国連邦")){
        bot = "日本評議会社会主義皇国連邦は東日本の友好国。<br>同じ社会主義を掲げている国家よ～。<br>同志万歳！";
    }

    else{
        bot = "なるほどぉ～";
    }

    if(img == 0){
        const icn = document.createElement("div");
        icn.classList.add("es");
        chat.appendChild(icn)
        const bi = document.createElement("div");
        bi.classList.add("icon");
        icn.appendChild(bi);

        const bt = document.createElement("div");
        bt.classList.add("es");
        bt.classList.add("bottext");
        bt.innerHTML = bot;
        chat.appendChild(bt); 
    }else{
        
    }
    /*ここから下は表示*/
    

    
}