import Card from 'react-bootstrap/Card';
import './Home.css'

function Home() {
   
    return (
    <Card className="home" style={{ width: '18rem' }}>
        <Card.Img variant="top" src='./Image/ofertas1.jpeg' />
        <Card.Img variant="top" src='./Image/ofertas3.jpeg' />
        <Card.Img variant="top" src='./Image/ofertas5.jpeg' />
    </Card>



    
    )

    

}

export default Home;