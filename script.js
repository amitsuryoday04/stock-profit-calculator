function calc(){let b=+buy.value,s=+sell.value,q=+qty.value;
let p=(s-b)*q;let pct=b?((s-b)/b*100):0;
out.innerHTML=`<h3>Total Profit: ₹${p.toFixed(2)}</h3><p>Profit %: ${pct.toFixed(2)}%</p>`;}