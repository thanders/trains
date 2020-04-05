import article1 from '../articles/article1.md'
import article2 from '../articles/article2.md'
import Article from './article';
import image1 from '../images/article1SBB.png'
import image2 from '../images/article2StationBaselSBB.jpg'
import image3 from '../images/Article3DB176213.png'
import image4 from '../images/Article4ParisGareNord.jpeg'
const getArticles = () => {

    let articles = new Array;

    const a1 = new Article(
        'Basel train station',
        'The first blurb',
        new Date(2020, 3, 28), article1, image1,
        'is in public domain');
    const a2 = new Article(
        'Swiss trains near Zug',
        'The second blub',
        new Date(2020, 3, 28),
        article2, image2,
        '© SBB CFF FFS');
    const a3 = new Article(
        'DeutscheBahn ICE trains',
        'An article about DB ICE',
        new Date(2020, 3, 29),
        article2, image3,
        '© Deutsche Bahn AG / Volker Emersleben');
    const a4 = new Article(
        'DeutscheBahn ICE trains',
        'An article about DB ICE',
        new Date(2020, 3, 29),
        article2, image4,
        '© Velvet / CC BY-SA (https://creativecommons.org/licenses/by-sa/3.0)');
    
    articles.push(a1);
    articles.push(a2);
    articles.push(a3);
    articles.push(a4);
    return(articles);
}

export default getArticles;