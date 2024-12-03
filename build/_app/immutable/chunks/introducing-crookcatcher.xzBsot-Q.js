import{a as l,t as u}from"./disclose-version.ClcsAfVQ.js";import"./legacy.rClDfmsn.js";import{s as t,f as p,w as c}from"./utils.DahspeCk.js";import{l as d,s as m}from"./props.C8Tf1a1a.js";import{_ as h}from"./_post.DKtbWt5R.js";import{F as v,P as g}from"./PlayStoreButton.BfXhhtmK.js";const f={title:"Découvrez CrookCatcher",subtitle:"10 ans à attraper les voleurs de téléphones et à protéger votre vie privée",date:"2024-12-01",description:"Du projet de programmation d'un jeune de 17 ans à des millions d'utilisateurs - comment CrookCatcher est devenue l'application de sécurité Android la plus intelligente pour attraper les voleurs de téléphones.",image:"/images/blog/intro-header.png",imageAlt:"Interface de l'application CrookCatcher montrant les fonctionnalités de sécurité",published:!1};var C=u(`<p>CrookCatcher est une application Android qui vous aide à attraper les voleurs de téléphones. Voici comment ça marche :</p> <ol><li><p>Quelqu’un essaie de déverrouiller votre téléphone avec le mauvais code PIN, mot de passe ou schéma.</p></li> <li><p>CrookCatcher prend silencieusement une photo avec la caméra frontale.</p></li> <li><p>L’application récupère ensuite la position GPS de votre téléphone et l’adresse estimée.</p></li> <li><p>Enfin, toutes ces informations sont envoyées directement à votre email.</p></li> <li><p>À partir de là, plusieurs choses peuvent se produire :</p> <ul><li>Vous riez en voyant votre propre visage stressé dans votre boîte mail 🥳</li> <li>Vous avez maintenant une photo du voleur et pouvez le signaler à la police 🚨</li> <li>Vous avez maintenant la preuve que votre conjoint essayait de lire vos messages et pouvez le confronter 😱</li> <li>…</li></ul></li></ol> <p>Pas mal, hein ! Allez-y et <a href="https://play.google.com/store/apps/details?id=com.harteg.crookcatcher&amp;referrer=utm_source=website&amp;utm_medium=blog_introducing_cc_go_ahead" target="_blank" rel="noopener noreferrer">téléchargez CrookCatcher</a> maintenant ou, si vous préférez, laissez-moi vous en dire un peu plus. Continuez à lire ! ☺️</p> <h2 id="-pourquoi-choisir-crookcatcher--cest-le-meilleur--voici-pourquoi-"><a aria-hidden="true" tabindex="-1" href="#-pourquoi-choisir-crookcatcher--cest-le-meilleur--voici-pourquoi-"><span class="icon icon-link"></span></a>🌟 Pourquoi choisir CrookCatcher ? C’est le meilleur ! Voici pourquoi :</h2> <p>Quand j’ai commencé à programmer CrookCatcher, en 2014, <a target="_blank" href="https://play.google.com/store/apps/details?id=com.lookout">Lookout</a> était la seule autre application qui faisait quelque chose de similaire. J’avais 17 ans et j’apprenais la programmation en autodidacte, alors j’ai pensé que ce serait amusant d’en faire une meilleure version. Aujourd’hui, il existe vraiment beaucoup d’autres applications qui proposent des fonctionnalités similaires, comme <a target="_blank" href="https://play.google.com/store/apps/details?id=com.bloketech.lockwatch">LockWatch</a>, <a target="_blank" href="https://play.google.com/store/apps/details?id=com.hld.screenmonitor">Hidden Eye</a>, <a target="_blank" href="https://play.google.com/store/apps/details?id=com.wtmp.svdsoftware">WTMP</a>, et même certaines qui ressemblent presque à des clones de CrookCatcher (je ne citerai pas de noms, hum hum.. <a target="_blank" href="https://play.google.com/store/apps/details?id=com.evezzon.intruderdetector">Intruder Detector</a>).</p> <p>La première version de CrookCatcher était assez basique (<a target="_blank" href="https://www.crookcatcher.app/images/blog/cc_old.png">pas très jolie !</a> 😅) mais elle fonctionnait. Bien que j’aie fait beaucoup d’autres choses dans ma vie depuis, j’ai continué à travailler sur CrookCatcher et aujourd’hui je pense que c’est vraiment la meilleure application disponible. Pourquoi, me demanderez-vous ? Eh bien… Parce que CrookCatcher ne se contente pas de prendre des photos, mais <em>enregistre aussi des vidéos</em>, joue des sons d’alarme, affiche un message au voleur ou un <em>faux écran d’accueil</em> pour lui faire croire qu’il a déverrouillé le téléphone, le faisant cliquer sur de fausses applications qui ne font que prendre plus de photos !</p> <p>CrookCatcher peut se camoufler sur votre écran d’accueil comme une icône de gestionnaire de fichiers et peut nécessiter un code pour être ouvert. Il peut prendre <em>plusieurs photos</em> pour chaque échec de déverrouillage, même en utilisant la <em>caméra arrière</em> pour voir les alentours, et peut envoyer des photos à plusieurs adresses email (ASTUCE : il suffit de séparer les adresses email par une virgule dans les paramètres de CrookCatcher 😉), il peut même prendre des photos quand quelqu’un devine le bon mot de passe ! Ah, et ai-je mentionné le téléchargement sur <em>Google Drive</em> ?</p> <p>Et comme les gens n’utilisent évidemment pas CrookCatcher uniquement pour attraper les voleurs, mais aussi pour attraper leurs conjoints, enfants et collègues indiscrets qui utilisent leur téléphone sans permission, CrookCatcher dispose également d’une excellente interface pour consulter les photos et vidéos directement dans l’application. Il possède même un journal d’activité immuable qui enregistre quand diverses actions sont effectuées dans CrookCatcher. Désolé pour cette longue explication, mais je pense que cela répond à la question.</p> <h2 id="️-comment-ça-marche"><a aria-hidden="true" tabindex="-1" href="#️-comment-ça-marche"><span class="icon icon-link"></span></a>⚙️ Comment ça marche</h2> <p>CrookCatcher utilise une permission spéciale appelée <em>Device Admin</em> pour détecter les tentatives de déverrouillage incorrectes directement sur l’écran de verrouillage normal. J’ai ensuite codé un système assez complexe pour que l’application prenne des photos sans d’abord afficher un aperçu à l’écran. CrookCatcher récupère ensuite la position GPS de votre téléphone et l’adresse estimée et les envoie avec la photo à votre email.</p> <p>CrookCatcher utilise <em>gmail</em> pour envoyer des emails. Cela garantit une transparence totale sur les emails que CrookCatcher envoie et où vont vos données. Pendant le processus de configuration de CrookCatcher, on vous demandera d’accorder à CrookCatcher l’accès à un compte gmail. Vous pouvez créer un nouveau compte gmail juste pour CrookCatcher ou utiliser un compte existant (vous pouvez aussi utiliser CrookCatcher sans email). CrookCatcher demande uniquement la permission d’envoyer des emails et ne peut pas lire, supprimer ou modifier les emails de votre compte. CrookCatcher effectue une <em>compression automatique des images</em> en fonction de votre vitesse réseau pour garantir que les emails sont envoyés le plus rapidement possible, tout en maintenant la meilleure qualité possible.</p> <p>Voici à quoi ressemble l’email que vous recevrez :</p> <figure class="blog-figure"><img src="/images/blog/email_preview_sm.jpg" alt="Recevez un email d'alerte avec la photo de l'intrus et sa localisation"> <figcaption>Recevez les photos et la localisation directement dans votre email</figcaption></figure> <h2 id="est-ce-que-tout-est-gratuit-"><a aria-hidden="true" tabindex="-1" href="#est-ce-que-tout-est-gratuit-"><span class="icon icon-link"></span></a>Est-ce que tout est gratuit ?</h2> <p>Non, mais les <em>fonctionnalités les plus importantes sont gratuites</em>. Cela inclut la prise de photos et l’envoi d’emails avec la localisation et la photo. Le prix de <strong>CrookCatcher Pro</strong> dépend de votre pays, vous devrez donc consulter l’application pour le voir. Mais c’est plutôt bon marché ! Vu le prix de votre téléphone (et de votre vie privée), je pense que c’est un bon investissement. Vous trouverez ci-dessous une liste complète des fonctionnalités dans les versions gratuite et pro.</p> <!> <h2 id="️-que-se-passe-t-il-si-le-voleur-active-le-mode-avion-ou-éteint-lappareil-"><a aria-hidden="true" tabindex="-1" href="#️-que-se-passe-t-il-si-le-voleur-active-le-mode-avion-ou-éteint-lappareil-"><span class="icon icon-link"></span></a>✈️ Que se passe-t-il si le voleur active le mode avion ou éteint l’appareil ?</h2> <p>La première chose qu’un voleur fait généralement après avoir volé un téléphone est d’activer le mode avion ou d’éteindre l’appareil. Cela empêche CrookCatcher d’envoyer des emails et de suivre votre appareil. J’ai donc implémenté une fonctionnalité qui tente d’empêcher cela ou au moins de s’assurer que nous attrapons le voleur avant qu’il ne le fasse.</p> <p>Lorsqu’elle est activée, CrookCatcher éteindra immédiatement l’écran si le menu d’alimentation, le menu des tuiles rapides ou le volet des notifications est détecté sur l’écran de verrouillage - et ce faisant, prendra des photos ! Cela ne peut pas empêcher le voleur d’éteindre l’appareil en maintenant le bouton d’alimentation enfoncé, mais il y a des chances qu’il essaie d’abord la méthode normale et soit ainsi pris par CrookCatcher !</p> <p>Ce n’était pas facile de programmer cette fonctionnalité car elle nécessite de détecter ces menus sur l’écran de manière semi-automatique et ne fonctionne donc pas sur tous les appareils. Je travaille à l’améliorer, mais ces fonctionnalités resteront probablement “expérimentales”. Essayez-les en allant dans la section “Fonctionnalités expérimentales” dans les paramètres de l’application (c’est gratuit !).</p> <h2 id="réflexions-finales"><a aria-hidden="true" tabindex="-1" href="#réflexions-finales"><span class="icon icon-link"></span></a>Réflexions finales</h2> <p>J’ai commencé à développer CrookCatcher pour m’amuser, mais j’ai continué parce que j’ai vu à quel point c’était utile pour tant de personnes. L’application a accumulé plus de 8 millions de téléchargements et envoyé au total plus de 400 millions d’emails ! C’est particulièrement gratifiant quand les gens écrivent dans les commentaires qu’ils ont réussi à récupérer leur téléphone volé grâce à CrookCatcher ! J’espère que cet article vous a été utile. Si vous êtes préoccupé par la sécurité des téléphones comme moi, essayez CrookCatcher !</p> <p>Bien à vous, <br> Jakob H. ✌️</p> <!> <figure class="blog-figure only-desktop" style="max-width: 250px;"><img src="/images/qr_codes/play_qr_source_blog_introducing_cc.png" alt="Code QR pour télécharger CrookCatcher"> <figcaption>Scannez pour télécharger CrookCatcher</figcaption></figure> <h2 id="questions-fréquentes"><a aria-hidden="true" tabindex="-1" href="#questions-fréquentes"><span class="icon icon-link"></span></a>Questions fréquentes</h2> <h3 id="q--quel-est-limpact-de-crookcatcher-sur-la-batterie-"><a aria-hidden="true" tabindex="-1" href="#q--quel-est-limpact-de-crookcatcher-sur-la-batterie-"><span class="icon icon-link"></span></a>Q : Quel est l’impact de CrookCatcher sur la batterie ?</h3> <p>R : CrookCatcher ne s’active que lors des tentatives de déverrouillage incorrectes, donc l’utilisation de la batterie est très minimale.</p> <h3 id="q--ma-vie-privée-est-elle-protégée-"><a aria-hidden="true" tabindex="-1" href="#q--ma-vie-privée-est-elle-protégée-"><span class="icon icon-link"></span></a>Q : Ma vie privée est-elle protégée ?</h3> <p>R : Oui ! CrookCatcher ne partage jamais vos photos, localisations, adresse email ou toute autre information personnelle avec qui que ce soit, pas même avec le développeur. Vous pouvez en savoir plus à ce sujet dans la <a href="/fr/privacy">politique de confidentialité</a>.</p> <p>D’autres questions ? Consultez la <a href="/fr/help">FAQ</a>.</p>`,1);function j(o,i){const r=d(i,["children","$$slots","$$events","$$legacy"]);h(o,m(()=>r,f,{children:(s,q)=>{var e=C(),a=t(p(e),30);v(a,{});var n=t(a,16);g(n,{utmSource:"blog_introducing_cc_bottom"}),c(14),l(s,e)},$$slots:{default:!0}}))}export{j as default,f as metadata};