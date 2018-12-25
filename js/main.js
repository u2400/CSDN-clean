var ad = $('iframe');
for (let i in ad)
{
    if( ad[i].tagName && ad[i].tagName == "IFRAME" )
    {
        if( ad[i].parentNode.tagName == "DIV" )
        {
            ad[i].parentNode.style['display'] = "none";
            if( ad[i].parentNode.parentNode.tagName == "DIV" )
            {
                ad[i].parentNode.parentNode.style['display'] = "none";
            }
        }
    }
}
