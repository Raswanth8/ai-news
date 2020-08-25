import React,{useState,useEffect} from 'react';
import alanbtn from '@alan-ai/alan-sdk-web';
import NewsCards from './Components/NewsCards/NewsCard';
import useStyles from './styles.js';

const alanKey='2c41b35a95158fc354f23013ee7261942e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
const[newsArticles,setNewsArticles] = useState([]);
const[activeArticle,setActiveArticle] = useState(-1);
const classes= useStyles();
  useEffect(()=> {
    alanbtn({
      key: alanKey,
      onCommand : ({command,articles}) => {
        if(command === 'newHeadlines'){
          setNewsArticles(articles);
          
        } else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle)=> prevActiveArticle +1);
        }
      }
    })
  },[])
  return(
<div>
  <div className={classes.logoContainer}>
<img src="https://cdn.clipart.email/5145a29c193a5a0d3f18dda5b3c4426d_mac-kung-fu-is-now-on-apple-news-mac-kung-fu_295-348.png" className={classes.logo} alt="newslogo"/>
  </div>
  <NewsCards articles={newsArticles} activeArticle={activeArticle}></NewsCards>
</div>
  );
}

export default App;