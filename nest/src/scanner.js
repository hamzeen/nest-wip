"use strict";

function Scanner() {

    var fs = require('fs');
    var path = require('path');

    this.initialize = function() {
        // read individual pieces of posts
        var markdownPosts = this.getMarkdownFiles('./api/posts/');

        var posts = [];
        for(var i =0; i< markdownPosts.length;i++) {
            posts.push(JSON.stringify(JSON.parse(markdownPosts[i])));
        }

        // collect them into a json array
        this.writeToFile(JSON.stringify(JSON.parse("{\"posts\": [" + posts + "]}"), null ,4));

        return {
            posts: markdownPosts
        };
    };

    this.getMarkdownFiles = function(folderPath) {
        var list = [];

        if(fs.existsSync(folderPath)) {
            var files = fs.readdirSync(folderPath),
                i, stat, file, output, markdown;

            for(i = 0; i < files.length; i++) {
                file = path.resolve(folderPath, files[i]);
                stat = fs.statSync(file);

                if(stat.isFile() && files[i].substr(-5) === '.json') {
                    markdown = fs.readFileSync(file, 'utf8');
                    // markdown = markdown.replace(/\r|\n/g, '');
                    // json.parse(markdown)
                    list.push(markdown);
                }
            }
        }

        return list;
    };

    this.writeToFile = function(content) {
        var pathFolder = './api';

        // create folder if not!
        if(!fs.existsSync(pathFolder)) {
            fs.mkdirSync(pathFolder);
        }

        var filePath = pathFolder + '/posts.json';

        fs.exists(filePath, function(exists) {
            if(exists) {
                fs.unlinkSync(filePath);
            }
            fs.writeFile(filePath, content, 'utf-8');
        });
    };

    return this.initialize();
}

module.exports = Scanner;
