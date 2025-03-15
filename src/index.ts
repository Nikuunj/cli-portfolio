import * as fs from 'fs';
import { Command } from 'commander';
import { JsTyping } from 'typescript';
import { log } from 'console';
import { json } from 'stream/consumers';

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
    .description('Diplay my project Names')
    .action((proejct_name: string | null) => {
        const data = fs.readFile('src/file/profile.json', "utf-8", (err: any, data: any) => {
            if(err) {
                log(err) 
            } else {
                const jsonData = JSON.parse(data);
                const project:{name: string, tech: string, description: string, link: string}[] = jsonData.project;

                if(proejct_name) {
                    const selectedProject = project.find(pr => pr.name === proejct_name);
                    log("Project Name: " + selectedProject?.name);
                    log("Project Tech-stack: " + selectedProject?.tech);
                    log("Project Link: " + selectedProject?.link)
                    log("Project Description: " + selectedProject?.description);
                } else {
                    project.forEach(pr => {
                        log(pr.name);
                    })
                    log('FOR MORE DESCRIPTION ABOUT PROJECT TYPE `say project <project name>`')                    
                }

            }
        });
    });

program.parse();