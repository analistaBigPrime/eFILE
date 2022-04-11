export const backendUrl = (() => {
  let subdomain = window.location.host.split('.')[1] ? window.location.host.split('.')[0] : false;
  let backendUrl;
  if(subdomain === 'bigprimedemo'){
    backendUrl = 'https://efirmalegal-dev.com';
  }else{
    backendUrl = `https://${subdomain}.efirmalegal-dev.com`;
  }
  return backendUrl;
})

