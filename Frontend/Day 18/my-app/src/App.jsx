function Card() {
    let board = [];
    for(let i=0;i<8;i++)
    {
        for(let j=0;j<8;j++)
        {
            if(((i ^ j) & 1) == 0)
                board.push(<tile className="whitetile"/>)
            else
                board.push(<tile className="blacktile"/>)
        }
    }
    return (
      <div className="container">{board}</div>
      
    );
  }
  function tile(){
      return <div></div>
  }

  export default Card;