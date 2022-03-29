# REACT CSS

-inline :
style={{ color: 'white', padding: 15 }}
*Moins optimisé mais gain de temps*

-css/module:
import app  from './App.module.css';
className={app.movie}
*Les styles de votre composant ne s’appliqueront alors qu’à votre composant peu importe le nom de classe que vous utiliserez*

-css/feuille de style :
import './App.css';
className="movie"
*Suppression du code mort , plus performant perte de temps*
