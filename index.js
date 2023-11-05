// code your solution here
superbowlWin = (record) => {

    const result = record.find( record => record.result === "W" );

  //  ✔ returns undefined if the record has no win objects
    return !!result ? result.year : undefined;
  }
  //great work