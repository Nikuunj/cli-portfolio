import * as fs from 'fs';
import { Command } from 'commander';
import { log } from 'console';

const program = new Command();

program
  .name('')
  .description('Profile based on command')
  .version('0.8.0');

program.command('name')
  .description('Display the name')
//   .argument('<file>', 'file to count')
  .action(() => {
        console.log('Nikunj Makwana');
    });


program.command('about')
    .description('Display about section')
    .action(()=> {
        const data = fs.readFile('src/file/profile.json', "utf-8", (err: any, data: any) => {
            if(err) {
                log(err) 
            } else {
                const jsonData = JSON.parse(data);
                log(jsonData.about)
            }
        } )
    })

program.command('connect')
    .description('Display social network')
    .action(() => {
        const data = fs.readFile('src/file/profile.json', "utf-8", (err: any, data: any) => {
            if(err) {
                log(err) 
            } else {
                const jsonData = JSON.parse(data);
                const link = jsonData.link;
                log(link.linkdin)
                log(link.vercel)
                log(link.x)
                log(link.git)
            }
        });
    });

    program.command('project')
    .description('Display my project names')
    .argument('[project_name]', 'Name of the project to view details') // ✅ Correctly define argument
    .action((project_name: string | undefined) => {
  
      fs.readFile('src/file/profile.json', 'utf-8', (err, data) => {
        if (err) {
          log('Error reading file:', err);
        } else {
          try {
            const jsonData = JSON.parse(data);
            const projects: { name: string; tech: string; description: string; link: string }[] = jsonData.project;
  
            if (project_name) {
              const selectedProject = projects.find(pr => pr.name.toLowerCase() === project_name.toLowerCase());
  
              if (selectedProject) {
                log("\n📌 Project Name: " + selectedProject.name);
                log("🛠 Tech Stack: " + selectedProject.tech);
                log("🔗 Link: " + selectedProject.link);
                log("📜 Description: " + selectedProject.description);
              } else {
                log(`❌ Project "${project_name}" not found.`);
              }
            } else {
              log("\n📂 Available Projects:");
              projects.forEach(pr => log(`  - ${pr.name}`));
              log('\n🔍 For more details, use: `cmd-profile project <project_name>`');
            }
          } catch (parseError) {
            log('Error parsing JSON:', parseError);
          }
        }
      });
    });

program.parse();