<script>
  import { createEventDispatcher } from 'svelte'

  import { patients, selectedPatient } from '../../js/store'
  import Chip from '../Chip/Chip.svelte'

  export let filterPatient

  const dispatch = createEventDispatcher()

  $: bestMatches = getBestMatches(filterPatient)

  function onSelectPatient(patientId) {
    $selectedPatient = { ...$patients.find(patient => patient.id === patientId) }
    dispatch('patientSelected')
  }

  function onCreatePatient() {
    dispatch('createPatient')
  }

  function getBestMatches(_filterPatient) {
    return _filterPatient.split(' ').reduce((scores, word) => {
      $patients.forEach((patient, i) => {
        scores[i].score += getPatientScore(patient, word)
      })

      return scores
    }, initialPatientScores())
      .filter(patient => patient.score)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
  }

  function initialPatientScores() {
    return $patients.map(patient => { return { ...patient, score: 0 } })
  }

  function getPatientScore(patient, word) {
    if (!word) return 0

    return +patient.firstname.toLowerCase().includes(word.toLowerCase()) +
      +patient.lastname.toLowerCase().includes(word.toLowerCase())
  }
</script>

<ul class="mdc-chip-set mdc-chip-set--choice" role="grid">
  {#if filterPatient}
    <li class="mdc-touch-target-wrapper" on:click={onCreatePatient}>
      <Chip title="Créer le nouveau patient {filterPatient}" leadingIcon="add"
        touchWrapper>
        Créer <span class="create-patient">{filterPatient}</span>
      </Chip>
    </li>
  {/if}
  {#each bestMatches as patient (patient.id)}
    <li class="mdc-touch-target-wrapper" on:click={() => onSelectPatient(patient.id)}>
      <Chip title="Sélectionner le patient {patient.firstname} {patient.lastname}" leadingIcon="face"
        touchWrapper>
        {patient.firstname} {patient.lastname}
      </Chip>
    </li>
  {/each}
</ul>

<style src="PatientList.scss"></style>
