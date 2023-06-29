// 컴포넌트는 앞글자를 대문자로 시작한다.
// 매개변수 props
export default function Button({color, size, name}) {
  return(
    <button style={{color:color, fontSize:size}}> {name} </button>
  )
}