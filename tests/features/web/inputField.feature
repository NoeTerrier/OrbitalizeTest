Feature: Input field works
  Everybody could write text inside the input field

  Scenario: App start
    Given app is started
    Then input should be ""

  Scenario: Change label text
    When I write "input text"
    Then input should be "input text"