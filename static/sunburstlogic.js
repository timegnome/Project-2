// d3.json("/newgamedata").then(function(data, err){
//   if (err) throw err;
//   var genre = data.map(row=>row.Genre)
//   var users = data.map(row=>row.Users)
//   var game = data.map(row=>row.Game)

//   // var   
//   // var date = data.alldata.map(row => row[0]),
//   // var players = data.alldata.map(row => [1])
//   console.log(genre)
//   console.log(users)
//   console.log(game)
// })


var data = [{
  type: "sunburst",

    labels: ['fps', 'platformer', 'rpg', 'sports', 'strategy',
            'csgo', 'destiny2', 'fo4', 'gta5', 'pd2', 'pubg', 'r6siege','rust', 'tf2', 'warframe', 
            'celeste', 'cuphead', 'deadcells','geometrydash', 'gris', 'hollowknight', 'portal2', 'terraria','transformice', 
            'ark', 'bdo', 'conan', 'eso', 'ffxiv', 'mhw','poe', 'sevendtd', 'skyrim', 'witcher3', 
            'assettocorsa', 'beatsaber', 'dirtrally', 'efootballpes2020','footballmanager2019', 'nba2k19', 'rocketleague','russianfishing4', 'tekken7', 
            'civ6', 'dota2', 'factorio','footballmanager2020', 'heartsofiron', 'raft', 'rimworld', 'smite','totalwarwarhammer2', 'warthunder',
            'csgo-2011', '680 Users','csgo-2012','3,656,674 Users','csgo-2013','14,696,455 Users',"csgo-2014","65,138,252 Users",'csgo-2015',"173,194,291 Users",'csgo-2016', "214,922,748 Users",'csgo-2017',"215,098,135 Users",'csgo-2018',"182,064,960 Users",'csgo-2019', "219,226,231 Users",'csgo-2020',"258,633,158 Users",
            'destiny2 - 2019','14,101,013 Users', 'destiny2 - 2020', '22,865,324 Users', 
            'fo4-2015',"11,283,718 Users",'fo4-2016', "13,874,407 Users",'fo4-2017',"9,529,088 Users",'3,21,675 Twitch Users','fo4-2018',"9,255,231 Users",'1,014,240 Twitch Users','fo4-2019', "6,006,201 Users",'290,795 Twtich Users','fo4-2020',"5,188,865 Users","441,012 Twitch Users",
            'gta5-2015',"19,897,544 Users",'gta5-2016', "21,285,345 Users",'gta5-2017',"28,808,911 Users",'4,246,812 Twitch Users','gta5-2018',"29,480,156 Users",'14,977,883 Twitch Users','gta5-2019', "37,803,011 Users",'46,716,455 Twtich Users','gta5-2020',"43,934,765 Users", "57,870,743 Twitch Users"
          ],
            
  
  
  
    parents: [
              "", "", "","","", 
              "fps","fps","fps","fps","fps","fps","fps","fps","fps","fps",
              "platformer","platformer","platformer","platformer","platformer","platformer","platformer","platformer","platformer",
              "rpg","rpg","rpg","rpg","rpg","rpg","rpg","rpg","rpg","rpg",
              "sports","sports","sports","sports","sports","sports","sports","sports","sports",
              "strategy","strategy","strategy","strategy","strategy","strategy","strategy","strategy","strategy","strategy",
              "csgo","csgo-2011","csgo","csgo-2012","csgo","csgo-2013","csgo","csgo-2014","csgo","csgo-2015","csgo","csgo-2016","csgo","csgo-2017","csgo","csgo-2018","csgo","csgo-2019","csgo","csgo-2020",
              "destiny2","destiny2 - 2019","destiny2","destiny2 - 2020",
              "fo4","fo4-2015","fo4","fo4-2016","fo4","fo4-2017","fo4-2017","fo4","fo4-2018","fo4-2018","fo4","fo4-2019","fo4-2019","fo4","fo4-2020","fo4-2020",
              "gta5","gta5-2015","gta5","gta5-2016","gta5","gta5-2017","gta5-2017","gta5","gta5-2018","gta5-2018","gta5","gta5-2019","gta5-2019","gta5","gta5-2020","gta5-2020"
              
            ],
    // values:[],
  outsidetextfont: {size: 10, color: "#377eb8"},
  leaf: {opacity: 0.4},
  marker: {line: {width: 2}},
}];

var layout = {
  height: 600,
  width:600,
  margin: {l: 30, r: 30, b: 30, t:30},
  sunburstcolorway:[
    "#636efa","#EF553B","#00cc96","#ab63fa","#19d3f3",
    "#e763fa", "#FECB52","#FFA15A","#FF6692","#B6E880"
  ],
  extendsunburstcolorway: true
};

Plotly.newPlot('sunburstdiv', data, layout);

