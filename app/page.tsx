export default function Home(){
return(<div style={{maxWidth:'1200px',margin:'0 auto',padding:'4rem 2rem'}}>
<h1 style={{fontSize:'2.5rem',fontWeight:'bold',textAlign:'center'}}><span style={{color:'#d4af37'}}>ITS-R</span> Alexa</h1>
<p style={{color:'#94a3b8',textAlign:'center',marginTop:'1rem'}}>AI Platform — ITS-R Universe</p>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'1.5rem',marginTop:'3rem'}}>
{['Platform','Dashboard','Analytics'].map((f,i)=>(<div key={i} style={{background:'#0d1117',border:'1px solid #1e293b',borderRadius:'0.75rem',padding:'1.5rem'}}><div style={{color:'#d4af37',fontWeight:'600'}}>{f}</div><div style={{color:'#94a3b8',fontSize:'0.875rem',marginTop:'0.25rem'}}>ITS-R Universe</div></div>))}
</div></div>)}