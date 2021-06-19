const members = ["1234567890", "1234567890", "1234567890"];

if (message.channel.id === "verifiy channel id here") {
  let author = message.author;
  if (
    members.includes(author.id) &&
    message.content.toLowerCase().includes("verify")
  ) {
    let roletogive = message.guild.roles.cache.get("role id to give");
    try {
      await message.member.roles.cache.add(roletogive);
      return message.channel.send(`${author} has been verified`);
    } catch (error) {
      return message.channel.send("Something went wrong");
    }
  }
}
