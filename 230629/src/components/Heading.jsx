// 컴포넌트는 앞글자를 대문자로 시작한다.
// 매개변수 props
// 이름을 정의해줄땐 중괄호로 묶는다.
export default function Heading({title}) {
  return(
    <h1>{title}</h1>
  )
}