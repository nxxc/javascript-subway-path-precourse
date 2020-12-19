export const resultTableTemplate = ({ searchType, distance, time, route }) =>
  `<h2 id="result-header">📝 결과</h2>
  <h3 id="result-type">${searchType}</h3>
    <table>
      <thead>
        <tr>
          <th>총 거리</th>
          <th>총 소요시간</th>
        </tr>
      </thead>
  <tbody id="result-table-body">
      <tr>
        <th>${distance}km</th>
        <th>${time}분</th>
      </tr>
      <tr>
        <th colspan="2">
        ${route}
        </th>
      </tr>
  </tbody>
</table>
`;
