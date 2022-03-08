import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { CssBaseline } from '@mui/material';
import { IImgCard } from '../store/imgcards';
import { useAppSelector } from '../store/hooks';
import '../css/mainpage.css'

function GridItemImageCard(props: IImgCard) {
    const baseurl = 'http://10.253.50.11:9527/statistics/'
    return (
        <Grid item xs={6} md={4} xl={3} key={props.keyName} marginTop={2} >
            <Item>
                <div className='img-card'>
                    <img src={baseurl + props.src} alt={props.alt} />
                </div>
            </Item>
        </Grid>
    )
}

function requireCovers(){}

function MainPage() {
    // const cards = useAppSelector((state) => state.imgs);
    // console.log('cards ', cards)
    const cards: IImgCard[] = [
        {
            src: 'stranger_things.webp',
            alt: 'stringer things'
        },
        {
            src: 'tiga.webp',
            alt: 'tiga'
        },
        {
            src: 'Farewell_My_Concubine.webp',
            alt: 'farewell'
        },
        {
            src: 'harry.webp',
            alt: 'harry'
        },
    ];
    return (
        <Container>
            <CssBaseline>
                <Grid container spacing={2} className='img-gallery'>
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