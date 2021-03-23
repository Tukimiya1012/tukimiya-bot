function bot(my){
    /*ここから本体*/
    var bot="";
    var img=0;

    if(my ==　"こんにちは" || my == "hello"){
        bot = "こんにちはー";
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

    else if(my.includes("ソ連")||my.includes("ソビエト連邦")){
        bot = "ソ連の話題出さないで...頭が痛い...";
        if(my.includes("嫌い")){
            bot = "ええ、私も嫌いよ。もちろん政治的にね？";
        }
    }

    else if(my.includes("西日本")){
        bot = "西日本がどうしたのよ？";
    }

    else if(my.includes("死")){
        if("にたい"){
            bot = "死なないでよ？私はどうなるのよ..."
        }
    }

    else if(my.includes("陸軍")){
        if(my.includes("師団配置")){
            if(my.includes("教")){
                bot = "これよ<br><img src=\"images\\sori_icon.png\">"
            }
        }
    }

    else if(my.includes("月宮")){
        if(my.includes("やめろ")||my.includes("辞めろ")||my.includes("辞任")){
            bot = "秘密警察送っといたから。";
        }
    }

    else if(my.includes("かわいい")||my.includes("可愛い")||my.includes("カワイイ")){
        bot = "ええ、私もそう思うわ。"
    }

    else if(my.includes("新・大日本帝国")){
        bot = "新・大日本帝国は東日本の友好国よ。<br>志塚信泰さんによって建国されたわ。<br>いつか行ってみたいわね。";
    }

    else if(my.includes("二本共和国")){
        bot = "二本共和国は東日本の友好国よ。<br>外務大臣の人が凄くかわいいって噂があるわ。";
    }

    else if(my.includes("萃月皇国")){
        
    }

    else{
        var ran = Math.floor(Math.random()*100);
        if(ran>=0 && 49>=ran){
            bot = "そうですかぁ...";
        }else{
            bot="へーなるほどー";
        }
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