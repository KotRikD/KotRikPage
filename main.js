
$(document).ready(function(){
    $("#welcome").fadeIn(2000);
});

typewriter = () => {
    new TypeIt('#tw', {
        speed: 30,
        autoStart: false
   })
   .type("oading...")
   .delete()
   .type("<h1 class=\"orange for-inline-nickname\">Mikhail Shenin (KotRik)</h1>")
   .break().pause(500)
   .type("<h4 class=\"blue for-inline-nickname\">Front-end developer // 14 years old</h4>")
   .break().break().pause(500)
   .type("<span class=\"pink\">Like:</span> #anime #osu #pr")
   .delete(2).pause(300)
   .type("programming #design")
   .break().break().pause(500)
   .type("Progr").delete(5).pause(500).type("<strong class=\"green\">Programming skills:</strong>")
   .break()
   .type("<span class=\"blue\">#pyt</span><span class=\"yellow\">hon</span> <span class=\"vue-1\">#vue</span><span class=\"vue-2\">.js</span> <span class=\"yellow\">#js</span> <span class=\"j\">#java</span> <span class=\"php\">#php (but this is skill?)</span> ")
   .pause(300).break()
   .type("ok... let's move next")
   .pause(1000)
   .break().break()
   .type("<strong>My proj").delete(3).type("rojects:</strong>").break()
   .type("&bull; <a href=\"http://vk.com/honokall\" class=\"vk\">VK Bot</a> // &bull; <a href=\"https://play.google.com/store/apps/details?id=ru.kotrik.rcon\" class=\"indigo\">Android rcon console</a> // &bull; <a href=\"https://git.kotrik.ru/KotRik/KotoBot\" class=\"discord\">A simple discord bot</a> // &bull; <span class=\"shiki\">ShikiApp(Developing)</span>")
   .break().break().pause(300)
   .type("Cont")
   .delete(4)
   .pause(500)
   .type("Contacts:")
   .break()
   .type("<span class=\"pink\">E-Mail: <a href=\"mailto:supadmin@kotrik.ru\">supadmin@kotrik.ru</a></span> // GitHub: <a href=\"http://github.com/kotrikd\">@kotrikd</a> // <span class=\"green\">Personal Git: <a href=\"http://git.kotrik.ru\">git.kotrik.ru</a></span>")
   .break().pause(300)
   .type("<span class=\"vk\">VK: <a href=\"http://vk.com/shadowcore12\">@shadowcore12</a></span> // <span class=\"telegram\">Telegram: <a href=\"http://t.me/KRDv2\">@KRDv2</a></span> // <span class=\"discord\">Discord: Micheba#0727</span>").pause(300)
   .break().break().type("And if you want play with me ;D").break().pause(300)
   .type("<a href=\"http://steamcommunity.com/id/KotRikPower\">steam</a> // <a class=\"pink\" href=\"http://osu.ppy.sh/u/KotRik\">osu!</a> //").break().break().pause(2000).type("<span class=\"orange\">(-_^)</span>")
   
  /* .type('Wll')
   .pause(500)
   .delete(2)
   .type('ell, ')
   .pause(1000)
   .type('I guess I\'m typing..')
   .break() .pause(750)
   .type(' but I don\'t really know what to say')
   .options({speed: 700})
   .type('...')
   .pause(750)
   .options({speed: 50})
   .delete()
   .type('IS THAT SO <strong>WRONG??</strong>'); */
}


projects = () => {
    $("#welcome").fadeOut(2000, function() {
        $("#projects").fadeIn(2000);
        typewriter();
    });
}
    
   