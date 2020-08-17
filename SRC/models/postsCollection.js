import { v4 as uuidv4 } from 'uuid';

var posts = [{
    title: 'Modern CSS Techniques To Improve Legibility.',
    content: `In this article, we cover how we can improve websites legibility using some modern CSS techniques,
    great new technologies like variable fonts and putting into practise what we learned from doing
    scientific researches..`,
    author: 'Admin'
},
{
    title: 'Software design in software production',
    content: `Convert Any Website into Android Application
    in Android Studio in 10 minutes.
    This tutorial walks you through creating a new Android Project, adding a WebView, loading a remote URL,
    and then loading a local HTML page. Design - Material , Software used: Android Studio.`,
    author: 'Solange'
},

{
    title: 'HTML:HyperText Markup Language',
    content: `Convert Any Website into Android Application
    in Android Studio in 10 minutes.
    This tutorial walks you through creating a new Android Project, adding a WebView, loading a remote URL,
    and then loading a local HTML page. Design - Material , Software used: Android Studio...`,
    
    author: 'bebe'
}
];
posts = posts.map((post) => ({ id: uuidv4(), ...post }));
export default posts;