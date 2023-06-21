var filename = [
["ceo.html", "map.html", "prize.html"],
["app.html", "mobile.html", "memory.html"],
];

var menuname1 = ["회사소개", "제품소개"];  // 대메뉴

var menuname2 = [
["CEO인사말", "오시는길", "수상실적"],
["일반가정", "모바일", "메모리"]
]


var currentname = location.href;
currentname = currentname.split("/")  // "/"를 기준으로 글자를 나눈다.

// alert(currentname);  // 실행하면 쉼표로 구분된다.

var len = currentname.length;  // currentname의 주소가 쉼표로 구분되어 나오므로, currentname의 주소가 저장된 배열의 개수를 구함.
currentname = currentname[len-1]; // 주소가 저장된 배열의 마지막 요소를 가져옴


// alert(currentname);  // 실행하면 쉼표로 구분된다. currentname에는 [**.html] 이 담겨있다.


var depth1;  // filename의 i, j가 저장됨
var depth2;

// menuname1의 개수
for(i=0; i<filename.length; i++){
  for(j=0; j<filename[i].length; j++){ //각 메뉴마다 알맹이 개수가 다를 수 있음
    if(currentname == filename[i][j]){ // currentname에 있는 주소와 filename의 내용이 같으냐
      depth1 = i;
      depth2 = j;
      break;
    } 
  }
}

alert(depth1+","+depth2);

if(depth1 != undefined && depth2 != undefined){
  var bc_1 = "&gt; <a>" + menuname1[depth1] + "</a>"
  var bc_2 = "&gt; <a href=' " + currentname + " '>" + menuname2[depth1][depth2] + "</a>"
                                // 링크만들기           menuname2 안의 값
  document.getElementById("bc_1").innerHTML = bc_1;  //  <span id="bc_1"></span> 안에 값이 들어간다.
  document.getElementById("bc_2").innerHTML = bc_2;

}