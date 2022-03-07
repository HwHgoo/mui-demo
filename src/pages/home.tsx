import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { CssBaseline } from '@mui/material';
import { IImgCard } from './interfaces';
import '../css/mainpage.css'

function GridItemImageCard(props: IImgCard) {
    return (
        <Grid item xs={3} key={props.keyName}>
            <Item>
                <div className='img-card'>
                    <img src={require(`${props.src}`)} alt={props.alt} />
                </div>
            </Item>
        </Grid>
    )
}

function MainPage(cards: Array<IImgCard> | null) {
    if (cards === null) {
        return (<div/>);
    }
    // const cards: IImgCard[] = [
    //     {
    //         src: `./resources/images/stranger_things.webp`,
    //         alt: 'stringer things'
    //     },
    //     {
    //         src: `./resources/images/tiga.webp`,
    //         alt: 'tiga'
    //     },
    //     {
    //         src: `./resources/images/Farewell_My_Concubine.webp`,
    //         alt: 'farewell'
    //     },
    //     {
    //         src: `./resources/images/harry.webp`,
    //         alt: 'harry'
    //     },
    // ];
    return (
        <Container>
            <CssBaseline>
                <Grid container spacing={3} className='img-gallery'>
                    {
                        cards.map((card, index) => (
                            <GridItemImageCard src={card.src} alt={card.alt} key={index} />
                        ))
                    }

                </Grid>
            </CssBaseline>
        </Container>
    );
}

export default MainPage;