const Container = ({children}) => {
    // 부모 컴포넌트로 부터 html을 prop 받음!
    // console.log(children);
    return (
        <div style={ { margin:20 , padding:20, border:"1px solid gray"}}>
            {children}
        </div>
    ) 
}

export default Container