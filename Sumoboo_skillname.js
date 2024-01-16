<script>
  const moveNames = {
    'skillAname': 'Finishing Move - Rock Crusher',
    'skillAdescription': 'Sumoboo jumps towards the target and executes a downward strike, dealing <b><em><span style="color: #ffffff;">Physical dmg</span></em></b> in an area. This skill is good at interrupting.',
    'skillBname': 'Overpower All Odds',
    'skillBdescription': 'Increases damage of all <span style="color: #ffffff;">Physical Attribute</span> Agents by <span style="color: #ffffff;">6%</span>.',
    'skillCname': 'Ether Aptitude Enhance',
    'skillCdescription': 'Boosts the Max <b><em><span style="color: #ffffff;">HP/ATK/DEF</span></em></b> of Agents in battle by <b><em><span style="color: #ffffff;">16%/8%/16%</span></em></b> of the Bangboo\'s Max <b><em><span style="color: #ffffff;">HP/ATK/DEF</span></em></b>.',
  };



const skillATable = document.getElementById('skillATable');
if (skillATable) {
  skillATable.innerHTML = `
    <table width="229">
      <tbody>
        <tr>
          <td width="155">DMG Multiplier</td>
          <td width="74">1214.00%</td>
        </tr>
        <tr>
          <td width="155">Daze Multiplier</td>
          <td width="74">86.00%</td>
        </tr>
        <tr>
          <td width="155">Skill Activation Frequency</td>
          <td width="74">4 times/min</td>
        </tr>
      </tbody>
    </table>
  `;
}




 function setMoveName(id, content) {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = content;
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    setMoveName('skillAname', moveNames.skillAname);
    setMoveName('skillAdescription', moveNames.skillAdescription);
    setMoveName('skillBname', moveNames.skillBname);
    setMoveName('skillBdescription', moveNames.skillBdescription);
    setMoveName('skillCname', moveNames.skillCname);
    setMoveName('skillCdescription', moveNames.skillCdescription);
});
</script>
