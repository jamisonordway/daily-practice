class Flip
  attr_accessor :input_array, :check_params

  def initialize(input_array)
    @input = input_array
  end

  def flip_part(start_position, end_position)
      while start_position != end_position
        @input[start_position], @input[end_position] = @input[end_position], @input[start_position]
        start_position += 1
        end_position -= 1
      end
    print @input
  end

#this works for odd lengths between params but not even ones.
end


flip = Flip.new([1,2,3,4,5,6,7,8,9,10])
flip.flip_part(3, 7)
puts "#{flip.input_array}"  # should be [1,2,3,8,7,6,5,4,9,10]