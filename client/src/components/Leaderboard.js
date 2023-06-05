import React from 'react'

function Leaderboard() {

  return (
    <>
    <main>
      <div id="container">
        <h2>Leaderboard</h2>
        <div id="leaderboard-container">
            <div id="rankings-list-container">
                <table id="rankings-list">
                    <tr>
                        <th>Rank</th>
                        <th>User</th>
                        <th>Score</th>
                    </tr>
                </table>
            </div>
        </div>
      </div>
      </main>
    </>
  )
}

export default Leaderboard