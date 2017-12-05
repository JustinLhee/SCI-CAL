let process = {
  menu:function(){
    let content = <ul>
      <div id="container">
        <div className="screen"><form name="calculator"><input type="text" name="display" id="scn" size={20} readOnly maxLength={50} /></form></div>
        <div className="btns">
        <p>
            <input type="button" defaultValue="SIN" className="button black" />
            <input type="button" defaultValue="COS" className="button black" />
            <input type="button" defaultValue="TAN" className="button black" />
            <input type="button" defaultValue="(-)" className="button black" />
            <input type="button" defaultValue="ABS" className="button black" />
        </p>
         <p>
          <input type="button" defaultValue="√" className="button black" />
          <input type="button" defaultValue="SQR" className="button black" />
          <input type="button" defaultValue="^" className="button black" />
          <input type="button" defaultValue="LOG" className="button black" />   
          <input type="button" defaultValue="In" className="button black" />
        </p>
        <p>
          <input type="button" defaultValue="CLR" className="button black" />
          <input type="button" defaultValue="(" className="button black" />
          <input type="button" defaultValue=")" className="button black" />
          <input type="button" defaultValue="M+" className="button black" />
          <input type="button" defaultValue="MOD" className="button black" />
        </p>
        <p>
          <input type="button" defaultValue={7} className="button silver" />
          <input type="button" defaultValue={8} className="button silver" />
          <input type="button" defaultValue={9} className="button silver" />
          <input type="button" defaultValue="DEL" className="button red" />
          <input type="button" defaultValue="EXIT" className="button red" />
       </p>
       <p>
          <input type="button" defaultValue={4} className="button silver" />
          <input type="button" defaultValue={5} className="button silver" />
          <input type="button" defaultValue={6} className="button silver" />
          <input type="button" defaultValue="x" className="button silver" />
          <input type="button" defaultValue="/" className="button silver" />
      </p>
      <p>
          <input type="button" defaultValue={1} className="button silver" />
          <input type="button" defaultValue={2} className="button silver" />
          <input type="button" defaultValue={3} className="button silver" />
          <input type="button" defaultValue="+" className="button silver" />
          <input type="button" defaultValue="-" className="button silver" />
       </p>
       <p>
          <input type="button" defaultValue={0} className="button silver" />
          <input type="button" defaultValue="." className="button silver" />
          <input type="button" defaultValue="EXP" className="button silver" />
          <input type="button" defaultValue="Pi" className="button silver" />
          <input type="button" defaultValue="=" className="button silver" />
       </p>
        </div></div>
    </ul>;
    ReactDOM.render(content,document.getElementById('root'));
  },
  page1:function(){
    let content = <div>
        onclick="calculator.display.value=Math.sin(calculator.display.value)"&gt;
        onclick="calculator.display.value=Math.cos(calculator.display.value)"&gt;
        onclick="calculator.display.value=Math.tan(calculator.display.value)"&gt;
        onclick="changeSign(calculator.display.value)"&gt;
        onclick="calculator.display.value=Math.abs(calculator.display.value)"&gt;
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  page2:function(){
    let content = <div>
        onclick="calculator.display.value=Math.sqrt(calculator.display.value)"&gt;
        onclick="calculator.display.value=Math.pow(calculator.display.value,2)"&gt;
        onclick="calculator.display.value=Math.tan(calculator.display.value)"&gt;
        onclick="changeSign(calculator.display.value)"&gt;
        onclick="calculator.display.value=Math.abs(calculator.display.value)"&gt;
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  page3:function(){
    let content = <div>
        onclick="calculator.display.value=''"&gt;
            onclick="calculator.display.value+='('"&gt;
            onclick="calculator.display.value+=')'"&gt;
            onclick="calculator.display.value+='M+'"&gt;
            onclick="calculator.display.value+='%'"&gt;
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  page4:function(){
  let content = <div>
        onclick="calculator.display.value+='7'"&gt;
            onclick="calculator.display.value+='8'"&gt;
            onclick="calculator.display.value+='9'"&gt;
            onclick="calculator.display.value =calculator.display.value=calculator.display.value.substring(0,calculator.display.value.length-1)"&gt;
      </div>;
      ReactDOM.render(document.getElementById('root'));
  },
  page5:function(){
  let content = <div>
        onclick="calculator.display.value+='4'"&gt;
            onclick="calculator.display.value+='5'"&gt;
            onclick="calculator.display.value+='6'"&gt;
            onclick="calculator.display.value+='*'"&gt;
            onclick="calculator.display.value+='/'"&gt;
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  page6:function(){
  let content = <div>
        onclick="calculator.display.value+='1'"&gt;
            onclick="calculator.display.value+='2'"&gt;
            onclick="calculator.display.value+='3'"&gt;
            onclick="calculator.display.value+='+'"&gt;
            onclick="calculator.display.value+='-'"&gt;
      </div>;
      ReactDOM.render(display,document.getElementById('root'));
  },
  page7function(){
  let content = <div>
        onclick="calculator.display.value+='0'"&gt;
            onclick="calculator.display.value+='.'"&gt;
            onclick="calculator.display.value+=Math.exp(calculator.display.value)"&gt;
            onclick="calculator.display.value+=Math.PI"&gt;
            onclick="calculator.display.value=eval(calculator.display.value)"&gt;
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  loading:function(){
    let content = <div>
          loading...
        </div>;
    ReactDOM.render(content,document.getElementById('root'));
  }
}

process.loading();
setTimeout(function(){
  process.menu();
},500);