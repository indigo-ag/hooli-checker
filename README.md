# Hooli Checker

Welcome and thanks for stopping by! Today we're going to be working on a real-life project that one of our developers recently encountered. Your mission, if you choose to accept it, is to **find the bad apples and get us a report ASAP**!

## Prerequisites

Before you can begin, we just need to set a few ground rules. First, you'll need `node` and `npm` installed on your machine to grab the appropriate packages to make this script run. 

### To install Node & NPM

Grab the latest package [here](https://nodejs.org/en/). Node comes bundled with NPM. Follow the instructions to download and install from the Node website. 

To verify you've got Node and NPM running correctly, open up a terminal and type:

```bash 
$> node --version
# => v8.9.1
$> npm --version
# => 5.5.1
```

If you get back a number for both (e.g. `v8.9.1` or `5.5.1`), you're good to go!

### To install the project's packages

We also use a tiny package to handle CSVs which you can install with `npm install`. As long as your script runs without complaining about a `missing module 'csv-parse'` you're now ready to code!

## Find the missing IDs

A sales account manager (SAM) has given you a list of accounts to give to his sales staff (`sam-accounts.csv`). In this file you will find 2 columns, the `accountHooliId` and the `samUid`. The first column is the sales account represented as a Hooli ID (Hooli is the fictional CRM software solution our sales team uses to bucket our customers in the sales funnel process). The second column is the account manager's unique ID (UID) in our database. This file is what the account manager is giving you to link all of his accounts to all of his sales people.

But there's a problem.

You've determined that most of those IDs don't exist in the database. In fact, you've created a list of all of the accounts that _do_ exist in the database (`existing-accounts.csv`) and it's _MUCH_ smaller than the list you were given.

The problem is the existing accounts only tells the sales team which projects were successfully linked. Instead, **you need to give the sales manager the list of IDs that _weren't_ found in the database**.

### A wrench in the plan

There's one catch - your `hooliId`s within `existing-accounts.csv` are actually _longer_ strings than the ones you were given! Funny enough, Hooli actually provides a long and short ID. Think of it like commit SHAs in GitHub; you really only need the first 8 characters of a commit to make a match but the entire SHA is still outputted in the git log.

So when you are comparing your existing account Hooli IDs, those are _longer_ than the strings you were given in `sam-accounts.csv`, so it is not an exact string match comparison.

## Results

You should create an output file with the **set difference** of IDs separated by line. The [set difference](http://mathworld.wolfram.com/SetDifference.html) is simply the list of IDs that are not in _both sets_ (the missing IDs from the database). 

You'll know you have the right answer when you have roughly 2900 lines of IDs...like I said, we have a _BIG_ discrepancy!

We also require that **your solution to this problem run in less than a few seconds**. This solution should be fast. If it takes you more than a second or two, you probably need to start over. You're running against potentially millions of comparisons so there's the possibility that this could take minutes to run and we just don't have time for that!

## Getting started

After you've set up your prerequisites **fork a new branch of this repository**. We want to make sure this branch stays clean. Afterwards, head into `index.js` to start coding up your solution. We've already `require`d all of the packages you'll need and created the template for the function we'll want you to run. It's your job to write to a new file with the missing IDs.

### Running the project

Once you've coded up a solution, you'll want to print the output to the console which you can do with a simple Node script command:

```bash
$> npm run start
# => your solution outputted here 
```

Finally, **submit a pull request that includes your written solution text file**. If you have any other questions, let us know and happy coding!
