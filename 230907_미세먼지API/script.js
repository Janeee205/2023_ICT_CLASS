
// 미세먼지

var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureSidoLIst'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'nytyMZXTn1vVjtBL1xKg8%2F7f3uutq9AVIqJW1AKdpT6Q5BRU0gE91rPhUXhmrtAvkDXL8HyYAnIK9bzgOZX5Vw%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /* 응답 데이터 타입 설정 */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* 한 페이지 결과 수 */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지 번호 설정 */
queryParams += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent('경북'); /* 조회할 데이터 시도 이름 설정 */
queryParams += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('DAILY'); /* 데이터 기간 */
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) { // 서버 응답 완료 상태 확인
    if (this.status === 200) { // HTTP 상태코드 200 (성공)

      // 서버로부터 받은 json 형식의 문자열 데이터를 Javascript 객체로 변환
      // responseText : 객체가 서버로부터 응답 받은 문자열이 담긴 변수
      let responseData = JSON.parse(this.responseText);
      console.log(responseData.response.body.items)

      // responseData에서 원하는 데이터만 추출해서 html 표기
      if (responseData.response.body.items) {
        console.log(responseData.response.body.items[1])

        let items = responseData.response.body.items;
        let dataDisplay = document.getElementById('data');


        for (let i = 0; i < items.length; i++) {

          let item = items[i];

          if (item.cityName == '경주시') {
            let dataItem = document.createElement('div');
            dataItem.innerHTML = item.cityName + ' 미세먼지 : ' + item.pm10Value;

            dataDisplay.appendChild(dataItem);
          }
        }
      } else {
        console.log('데이터 구조 다시 확인해라ㅡㅡ')
      }

    } else {
      console.log('HTTP 요청 실패! ' + this.status)
    }
  }
};

xhr.send('');