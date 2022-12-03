let tar = document.getElementById('tar');

const assessmentButton = document.getElementById('assessment');
const getdate = document.getElementById('date');
const codinate = document.getElementById('codinate');
const tempercher ={
'11/21':19,
'11/22':19,
'11/23':14,
'11/24':18,
'11/25':17
}

assessmentButton.onclick = function() {
    console.log('ボタンが押されました');
    choice2=getdate.value;
    if (choice2 === '11/21') {
        tar.innerHTML='<td>11/21</td><td>雨→晴</td><td>19度</td><td>11度</td>';
      } else if (choice2 === '11/22') {
        tar.innerHTML='<td>11/22</td><td>曇/晴</td><td>19度</td><td>12度</td>';
      } else if (choice2 === '11/23') {
        tar.innerHTML='<td>11/23</td><td>曇/雨</td><td>14度</td><td>11度</td>';
      } else if (choice2 === '11/24') {
        tar.innerHTML='<td>11/24</td><td>晴/曇</td><td>18度</td><td>11度</td>';
      } else if (choice2 === '11/25') {
        tar.innerHTML='<td>11/25</td><td>曇/晴</td><td>17度</td><td>11度</td>';
      } else {
        tar.innerHTML = '';
      }
    
  };

  const select = document.querySelector('select');
  const para = document.getElementById('codinate');
  
  select.addEventListener('change', setWeather);
  
  function setWeather() {
    const choice = select.value;
    choice2=getdate.value;
    if (choice === 'プレゼン' && tempercher[choice2] > 16 ) {
      para.innerHTML= '<img src="https://domani.shogakukan.co.jp/wp-content/uploads/2022/02/w_S5_3424.jpg">';
    } else if (choice === 'プレゼン' && tempercher[choice2] < 15 ) {
        para.innerHTML ='<img src="https://domani.shogakukan.co.jp/wp-content/uploads/2018/11/Domani_201812_p99_c.jpg">' ;
    } else if (choice === 'デスクワーク' && tempercher[choice2] > 16 ) {
      para.innerHTML = '<img src="https://img.storyweb.jp/wp-content/uploads/2022/11/st2384_00.jpg">';
    } else if (choice === 'デスクワーク' && tempercher[choice2] < 15 ) {
        para.innerHTML= '<img src="https://img.storyweb.jp/wp-content/uploads/2022/11/KD_06-020_fin.jpg">';
    } else if (choice === 'プライベートで予定あり' && tempercher[choice2] > 16 ) {
      para. innerHTML='<img src="https://domani.shogakukan.co.jp/wp-content/uploads/2020/11/Domani_202012_p59_a.jpg">' ; 
    } else if (choice === 'プライベートで予定あり' && tempercher[choice2] < 15 ) {
        para.innerHTML='<img src="https://domani.shogakukan.co.jp/wp-content/uploads/2021/02/Domani_202102_p37_a.jpg">' ; 
     } else {
      para.innerHTML= '';
    }
  }
  