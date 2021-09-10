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
        <div id = "mainContainer">
      <div className="container">
            <img src="https://i.imgflip.com/2kuh6f.jpg" id="image" />
            <h1>Thinking like react</h1>
      </div>
      <div className="container2">{board}</div>
      </div>
      
    );
  }
  function tile(){
      return <div></div>
  }

  export default Card;