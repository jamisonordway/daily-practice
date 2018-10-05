# Write a function that will loop through a list of integers and 
# print the index of each element after a 3 second delay.
class Index
  attr_reader :given

  def self.print_stuff(integers)
    integers.each do |integer|
      sleep(3)
      puts 
    end
  end

  given = [1, 2, 3, 5, 23]
  print_stuff(given)

end
