"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
class CopyCat {
    constructor(github, owner, repo) {
        this.github = github;
        this.owner = owner;
        this.repo = repo;
    }
    async run() {
        const issue = await this.github.getIssue();
        console.log(`Mirroring issue \`${issue.title}\` to ${this.owner}/${this.repo}`);
        await this.github.createIssue(this.owner, this.repo, issue.title, issue.body.replace(/@|#|issues/g, '-').replace(/\/github.com\//g, '/github-com/'));
    }
}
exports.CopyCat = CopyCat;
//# sourceMappingURL=CopyCat.js.map