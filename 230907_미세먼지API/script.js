
// 미세먼지

var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/B552584/ArpltnStatsSvc/getMsrstnAcctoRDyrg'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'nytyMZXTn1vVjtBL1xKg8%2F7f3uutq9AVIqJW1AKdpT6Q5BRU0gE91rPhUXhmrtAvkDXL8HyYAnIK9bzgOZX5Vw%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /* 응답 데이터 타입 설정 */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* 한 페이지 결과 수 */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지 번호 설정 */
queryParams += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent('경북'); /* 조회할 데이터 시도 이름 설정 */
queryParams += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('DAILY'); /* 데이터 기간 */
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    // 200 : 성공적으로 연결되었을때
    if (this.status == 200) {
      let responseData = JSON.parse(this.responseText);
      console.log(responseData)
    }
  }
};

xhr.send('');