import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  const menu = [
    {
      name: 'Biriyani',
      image: 'https://en.wikipedia.org/wiki/File:%22Hyderabadi_Dum_Biryani%22.jpg',
      wikiLink: 'https://en.wikipedia.org/wiki/Biryani',
    },
    {
      name: 'Gulab Jamun',
      image: 'https://en.wikipedia.org/wiki/File:Gulab_jamun_(Gibraltar,_November_2020).jpg' ,
      wikiLink: 'https://en.wikipedia.org/wiki/Gulab_jamun',
    },
    {
      name: 'Fried Rice',
      image: 'https://simple.wikipedia.org/wiki/File:Malapascua,_Vegetable_fried_rice,_Philippines.jpg',
      wikiLink: 'https://simple.wikipedia.org/wiki/Fried_rice',
    },
    {
      name: 'Prawns',
      image: 'https://www.bing.com/images/search?view=detailV2&ccid=TL2JUeKz&id=65B3FDCA8EE37B8122DE7EFCE91204B7F7F65039&thid=OIP.TL2JUeKzCNF9izDufio7JQHaHa&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4cbd8951e2b308d17d8b30ee7e2a3b25%3frik%3dOVD297cEEun8fg%26riu%3dhttp%253a%252f%252fukcdn.ar-cdn.com%252frecipes%252foriginals%252fc51f3d1b-649d-4d80-b037-6d6a413459d3.jpg%26ehk%3ddQngeEOaCujXqnX4Y5p%252f5jId5pd%252fLQpVBus0UrSe%252bHw%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=960&expw=960&q=prawns+currywikipedi&simid=608041127667582482&FORM=IRPRST&ck=FC22BB2B8B99BA81FD8BD4BEBFA9FEB6&selectedIndex=1&ajaxhist=0&ajaxserp=0',
      wikiLink: 'https://en.wikipedia.org/wiki/Prawn',
    },
    {
      name: 'Fish Curry',
      image: 'https://www.bing.com/ck/a?!&&p=7e639f29eba4fd19JmltdHM9MTY5MDE1NjgwMCZpZ3VpZD0xNGE1OTM3Yy1jYzM3LTY3M2EtMWJiZS04MTRmY2Q5YTY2YjAmaW5zaWQ9NTY1MQ&ptn=3&hsh=3&fclid=14a5937c-cc37-673a-1bbe-814fcd9a66b0&u=a1L2ltYWdlcy9zZWFyY2g_Rk9STT1JQVJSVEgmcT1tYWxhYmFyK21hdHRoaStjdXJyeQ&ntb=1',
      wikiLink: 'https://en.wikipedia.org/wiki/Fish_curry',
    },
    {
      name: 'Panner fry',
      image: 'C:\Users\shett\OneDrive\Desktop\pa.jpeg',
      wikiLink: 'https://en.wikipedia.org/wiki/Paneer',
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center">Menu</h1>
      <div className="row">
        {menu.map((menu, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100">
              <img src={menu.image} alt={menu.name} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title text-center">{menu.name}</h3>
                <div className="mt-auto">
                  <a href={menu.wikiLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

