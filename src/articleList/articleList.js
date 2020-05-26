import Article from './article';
import TrainStation from '../dataClasses/trainStation';

const article1 = require('../articles/article1.md');
const article2 = require('../articles/article2.md');

const image1 = require('../images/SBB.png');
const image2 = require('../images/stationBaselSBB.jpg');
const image3 = require('../images/DB176213.png');
const image4 = require('../images/parisGareNord.jpeg');

const imageURL1 = '/trains/images/SBB.png';
const imageURL2 = '/trains/images/stationBaselSBB.jpg';
const imageURL3 = '/trains/images/DB176213.png';
const imageURL4 = '/trains/images/parisGareNord.jpeg';

const articleURL1 = '/trains/articles/article1.md';
const articleURL2 = '/trains/articles/article2.md';


const getArticles = () => {

    let articles = new Array;

    let a1 = new Article(
        'Basel train station',
        'The first blurb',
        new Date(2020, 3, 28), articleURL1, imageURL1,
        'is in public domain');
    const a2 = new Article(
        'Swiss trains near Zug',
        'The second blub',
        new Date(2020, 3, 28),
        articleURL2, imageURL2,
        '© SBB CFF FFS');
    const a3 = new Article(
        'DeutscheBahn ICE trains',
        'An article about DB ICE',
        new Date(2020, 3, 29),
        articleURL2, imageURL3,
        '© Deutsche Bahn AG / Volker Emersleben');
    const a4 = new Article(
        'DeutscheBahn ICE trains',
        'An article about DB ICE',
        new Date(2020, 3, 29),
        articleURL2, imageURL4,
        '© Velvet / CC BY-SA (https://creativecommons.org/licenses/by-sa/3.0)');
    
        const overview = {
            Location: 'Bern, Switzerland',
            'Year opened': '1858',
            Platforms: '12 + 4 other',
            Tracks: '17',
        }
        const t1 = new TrainStation('Bern station', overview);

        a1.trainStation = t1;

        const contactInfo ={
            'Swiss Federal Railways': 'https://www.sbb.ch',
            'Trainstation website': 'https://www.sbb.ch/en/station-services/am-bahnhof/railway-stations/bern-station.html'
        }

        a1.trainStation.contactInfo = contactInfo;
        a1.trainStation.bathrooms= 2;
        a1.trainStation.architect= 'John Doe';
        a1.trainStation.wifi= 'Yes';

    articles.push(a1);
    articles.push(a2);
    articles.push(a3);
    articles.push(a4);
    return(articles);
}

export default getArticles;