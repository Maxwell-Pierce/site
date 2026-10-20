// Maxwell's geometric lion enters as a blue holographic mark, without face effects.
window.addEventListener('site-entered',()=>{
 if(window.matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 const original=document.querySelector('.entry-character');if(!original)return;
 const lion=original.cloneNode(true);lion.className='entry-character entry-lion';
 lion.querySelectorAll('.entry-eye,.entry-spark').forEach(node=>node.remove());
 const sweep=document.createElement('span');sweep.className='lion-light-sweep';lion.append(sweep);
 original.remove();document.body.append(lion);
 lion.addEventListener('animationend',event=>{if(event.target===lion)lion.remove();});
 setTimeout(()=>lion.remove(),2700);
});
