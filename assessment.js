
'use strict';
const userNameInput = document.getElementById("user-name");
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

function removeAllchildren(element)
{while(element.firstChild){
    element.removeChild(element.firstChild);}
}
//子要素がある限り削除し続ける
assessmentButton.onclick = function(){
    const userName = userNameInput.value;//打ち込まれた名前を抽出している
    if(userName.length === 0){
return;}//何も打ち込まれないなら動かない

//resultDividedに子要素を加える↓　結果表示エリア
removeAllchildren(resultDivided); //resultDividedは親要素
const header = document.createElement("h3");
header.innerText = "診断結果";　//見出しの部分
resultDivided.appendChild(header);

const paragraph = document.createElement("p");
const result = assessment(userName);
paragraph.innerText = result;　//診断結果を表示させる部分
resultDivided.appendChild(paragraph);


//tweetDividedに子要素を加える↓　ツイートボタン表示エリア
removeAllchildren(tweetDivided);
const anchor = document.createElement("a");
const hrefvalue = "https://twitter.com/intent/tweet?button_hashtag="
+ encodeURIComponent("あなたの良いところ診断します")
+"&ref_src=twsrc%5Etfw" ;
anchor.setAttribute("href",hrefvalue);
anchor.className = 'twitter-hashtag-button';
anchor.setAttribute("data-text",result);　//ツイート先での表文章
anchor.innerText= "Tweet #あなたのいいところ";
tweetDivided.appendChild(anchor);
 
// widgets.js の設定
 const script = document.createElement('script');
 script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
 tweetDivided.appendChild(script);

/*userNameInput.onkeydown = function(event){
if (event.key === "Enter")
{
     assessmentButton.onclick();
}
*/


const answers =[
"{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります",
"{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう",
"{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます",
"{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます",
"{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています",
"{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます",
"{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます",
"{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます",
"{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます",
"{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています",
"{userName}のいbいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます",
"{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています",
"{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります",
"{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています",
"{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。",
"{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています"]
;
function assessment(userName)
{
let sumchar = 0;
for (let i = 0;i<userName.length;i++)
{sumchar = sumchar + userName.charCodeAt(i);}
const index = sumchar % answers.length;
let result = answers[index];
result　= result.replace(/\{userName\}/g,userName);
    return result;
}
