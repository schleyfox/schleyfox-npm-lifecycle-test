const fs = require('fs');

const basePackageJson = fs.readFileSync('package.json.base', 'utf8');
const packageJson = JSON.parse(basePackageJson);

const scriptNames = ["dependencies",                                   
"install",                                        
"postinstall",                                    
"postpack",                                       
"postprepare",                                    
"postpublish",                                    
"postrestart",                                    
"poststart",                                      
"poststop",                                       
"posttest",                                       
"postversion",                                    
"preinstall",                                     
"prepack",                                        
"prepare",                                        
"preprepare",
"prepublish",
"prepublishOnly",
"prerestart",
"prestart",
"prestop",
"pretest",
"preversion",
"publish",
"restart",
"start",
"stop",
"test",
"version"];

const scripts = {}

scriptNames.forEach(scriptName => {
  scripts[scriptName] = `echo "$(date +"%Y-%m-%dT%H:%M:%S%z") ${scriptName}" >> scripts.log`;
});


packageJson.scripts = scripts;

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
